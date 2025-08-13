import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

export interface BlogRepository {
  getAllPost(): Promise<PostDto[]>;
  createPost(postDto: PostDto): Promise<void>;
  getPost(id: string): Promise<PostDto | undefined>;
  deletePost(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<void>;
}

@Injectable()
export class BlogFileRepository implements BlogRepository {
  FILE_NAME = './src/blog.data.json';

  async getAllPost(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf8');
    const posts = JSON.parse(datas);
    return posts;
  }

  async createPost(postDto: PostDto) {
    const posts = await this.getAllPost();
    const id = posts.length + 1;
    const createPost = { id: id.toString(), ...postDto, createdDt: new Date() };
    posts.push(createPost);
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  async getPost(id: string): Promise<PostDto | undefined> {
    const posts = await this.getAllPost();
    // id 속성 접근을 위해 any로 캐스팅
    const result = (posts as any[]).find((post) => post.id === id);
    return result;
  }

  async deletePost(id: string): Promise<void> {
    const posts = await this.getAllPost();
    const filteredPosts = (posts as any[]).filter((post) => post.id !== id);
    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts));
  }

  async updatePost(id: string, postDto: PostDto): Promise<void> {
    const posts = await this.getAllPost();
    const index = (posts as any[]).findIndex((post) => post.id === id);
    const updatePost = { id, ...postDto, updatedDt: new Date() };
    (posts as any[])[index] = updatePost;
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }
}

@Injectable()
export class BlogMongoRepository implements BlogRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllPost(): Promise<Blog[]> {
    return await this.blogModel.find().exec();
  }

  async createPost(postDto: PostDto): Promise<void> {
    const createPost = {
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    };
    await this.blogModel.create(createPost);
  }

  async getPost(id: string): Promise<PostDto | undefined> {
    const result = await this.blogModel.findById(id);
    // null이면 undefined로 변환
    return result === null ? undefined : (result as any);
  }

  async deletePost(id: string): Promise<void> {
    await this.blogModel.findByIdAndDelete(id);
  }

  async updatePost(id: string, postDto: PostDto): Promise<void> {
    const updatePost = { id, ...postDto, updatedDt: new Date() };
    await this.blogModel.findByIdAndUpdate(id, updatePost);
  }
}

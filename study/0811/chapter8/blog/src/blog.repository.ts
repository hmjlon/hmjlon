// src/blog.repository.ts
import { readFile, writeFile } from 'fs/promises';
import { Post, PostDto } from './blog.model';
import { Injectable } from '@nestjs/common';

// 리포지토리 인터페이스: 저장/조회는 Post, 입력값은 PostDto
export interface BlogRepository {
  getAllPost(): Promise<Post[]>;
  createPost(postDto: PostDto): Promise<void>;
  getPost(id: string): Promise<Post | undefined>;
  deletePost(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<void>;
}

@Injectable()
export class BlogFileRepository implements BlogRepository {
  FILE_NAME = './src/blog.data.json';

  async getAllPost(): Promise<Post[]> {
    const datas = await readFile(this.FILE_NAME, 'utf8').catch(() => '[]');
    return JSON.parse(datas) as Post[];
  }

  async createPost(postDto: PostDto): Promise<void> {
    const posts = await this.getAllPost();
    const id = (posts.length + 1).toString();
    posts.push({ id, ...postDto, createdDt: new Date() });
    await writeFile(this.FILE_NAME, JSON.stringify(posts, null, 2));
  }

  async getPost(id: string): Promise<Post | undefined> {
    const posts = await this.getAllPost();
    return posts.find((p) => p.id === id);
  }

  async deletePost(id: string): Promise<void> {
    const posts = await this.getAllPost();
    const next = posts.filter((p) => p.id !== id);
    await writeFile(this.FILE_NAME, JSON.stringify(next, null, 2));
  }

  async updatePost(id: string, postDto: PostDto): Promise<void> {
    const posts = await this.getAllPost();
    const idx = posts.findIndex((p) => p.id === id);
    if (idx === -1) return;
    posts[idx] = { ...posts[idx], ...postDto, updatedDt: new Date() };
    await writeFile(this.FILE_NAME, JSON.stringify(posts, null, 2));
  }
}

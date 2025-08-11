// src/blog.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Post, PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';

@Injectable()
export class BlogService {
  // 간단히 구현 클래스를 직접 주입 (토큰 방식도 가능)
  constructor(private readonly blogRepository: BlogFileRepository) {}

  async getAllPosts(): Promise<Post[]> {
    return this.blogRepository.getAllPost();
  }

  async createPost(postDto: PostDto): Promise<void> {
    await this.blogRepository.createPost(postDto);
  }

  // 못 찾으면 404 에러
  async getPost(id: string): Promise<Post> {
    const post = await this.blogRepository.getPost(id);
    if (!post) throw new NotFoundException(`Post ${id} not found`);
    return post;
  }

  async delete(id: string): Promise<void> {
    await this.blogRepository.deletePost(id);
  }

  async updatePost(id: string, postDto: PostDto): Promise<void> {
    // 존재 확인까지 하고 싶다면 아래 주석 해제
    // const post = await this.blogRepository.getPost(id);
    // if (!post) throw new NotFoundException(`Post ${id} not found`);
    await this.blogRepository.updatePost(id, postDto);
  }
}

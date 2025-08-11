export interface Post {
  id: string;
  title: string;
  content: string;
  name: string;
  createdDt: Date;
  updatedDt?: Date;
}
export type PostDto = Pick<Post, 'title' | 'content' | 'name'>;

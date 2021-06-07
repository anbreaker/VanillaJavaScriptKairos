import { PostRepository } from './post.repository';

export class PostsService {
  constructor() {
    this.repository = new PostRepository();
  }

  async getPosts() {
    return await this.repository.getAllPosts();
  }
}

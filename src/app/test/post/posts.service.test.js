import { POSTS } from '../../../../fixtures/posts';
import { PostRepository } from '../../post/post.repository';
import { PostsService } from '../../post/posts.service';
jest.mock('../../post/post.repository');

describe('Posts Service', () => {
  beforeEach(() => {
    PostRepository.mockClear();
  });

  test('should get posts', async () => {
    PostRepository.mockImplementation(() => {
      return {
        getAllPosts: () => {
          return POSTS;
        },
      };
    });

    const service = new PostsService();
    const posts = await service.getPosts();

    expect(posts.data.length).toEqual(100);

    expect(PostRepository).toHaveBeenCalledTimes(1);
  });
});

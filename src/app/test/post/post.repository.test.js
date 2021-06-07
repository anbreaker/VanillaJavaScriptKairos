import axios from 'axios';
jest.mock('axios');

import { POSTS } from '../../../../fixtures/posts';
import { PostRepository } from '../../post/post.repository';

describe('PostRepository', () => {
  beforeEach(() => {
    axios.mockClear();
  });

  test('should load all post', async () => {
    axios.get = jest.fn().mockResolvedValue(POSTS);

    const repository = new PostRepository();
    const result = await repository.getAllPosts();

    expect(result.data.length).toEqual(100);
  });
});

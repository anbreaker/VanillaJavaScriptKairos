import axios from 'axios';
jest.mock('axios');

import { DATA_MEEP } from '../../../../fixtures/meepAPI';
import { MeepApi } from '../../meep/meep.api';

describe('Meep API', () => {
  beforeEach(() => {
    axios.mockClear();
  });
  test('should load all post', async () => {
    axios.get = jest.fn().mockResolvedValue(DATA_MEEP);

    const repository = new MeepApi();
    const data = await repository.getAllData();

    expect(data.data.length).toEqual(43);
  });
});

import axios from 'axios'
import { fetchIngredients } from './fetchIngredients'

jest.mock('axios')

describe('fetchIngredients', () => {
  it('calls axios', () => {
    fetchIngredients()

    expect(axios.get).toHaveBeenCalled()
  })

  it('returns ingredients key', async () => {
    const data = {
      ingredients: []
    };

    (axios.get as any).mockImplementationOnce(() => Promise.resolve({ data }));

    await expect(fetchIngredients()).resolves.toEqual(data.ingredients);
  })
})

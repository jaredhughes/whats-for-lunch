import axios from 'axios'
import { fetchRecipes } from './fetchRecipes'

jest.mock('axios')

describe('fetchIngredients', () => {
  it('calls axios', () => {
    fetchRecipes()

    expect(axios.get).toHaveBeenCalled()
  })

  it('returns recipes key', async () => {
    const data = {
      recipes: []
    }
    ;(axios.get as any).mockImplementationOnce(() => Promise.resolve({ data }))

    await expect(fetchRecipes()).resolves.toEqual(data.recipes)
  })
})

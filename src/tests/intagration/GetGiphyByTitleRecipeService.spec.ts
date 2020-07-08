import GetGiphyByTitleRecipeService from '../../app/services/GetGiphyByTitleRecipeService'

import '../../bootstrap'

describe('GetGiphyByTitleRecipe', () => {
  it('should be able to get the url', async () => {
    const getGiphyByTitleRecipeService = new GetGiphyByTitleRecipeService()

    const giphy = await getGiphyByTitleRecipeService.run('Hash and Eggs')

    expect(giphy).not.toBeNull()
  })
})

import GetGiphyByTitleRecipeService from '../../app/services/GetGiphyByTitleRecipeService'

import '../../bootstrap'

describe('GetGiphyByTitleRecipe', () => {
  it('should be able to get the url', async () => {
    const getGiphyByTitleRecipeService = new GetGiphyByTitleRecipeService()

    const giphy = await getGiphyByTitleRecipeService.run('Hash and Eggs')

    expect(giphy).toBe('https://media0.giphy.com/media/qJkRbWM1MfVjq/giphy.gif?cid=283e22982b66eda1a0dbd7f7d7faa6c15e0e8ff02bf640c1&rid=giphy.gif')
  })
})

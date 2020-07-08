import { giphyApi } from './api'

class GetGiphyByTitleRecipeService {
  public async run (title: string): Promise<string> {
    const response = await giphyApi.get('gifs/search', {
      params: {
        api_key: process.env.API_KEY,
        q: title,
        limit: 1
      }
    })

    const giphy: string = response.data.data[0].images.original.url

    return giphy
  }
}

export default GetGiphyByTitleRecipeService

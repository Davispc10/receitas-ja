import axios, { AxiosInstance } from 'axios'

class Api {
  public recipePuppy (): AxiosInstance {
    return axios.create({
      baseURL: 'http://www.recipepuppy.com/api'
    })
  }

  public giphy (): AxiosInstance {
    return axios.create({
      baseURL: 'https://api.giphy.com/v1'
    })
  }
}

export const recipeApi = new Api().recipePuppy()
export const giphyApi = new Api().giphy()

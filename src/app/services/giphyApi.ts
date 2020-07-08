import axios from 'axios'

const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1'
})

export default giphyApi

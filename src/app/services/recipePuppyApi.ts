import axios from 'axios'

const recipePuppyApi = axios.create({
  baseURL: 'http://www.recipepuppy.com/api/'
})

export default recipePuppyApi

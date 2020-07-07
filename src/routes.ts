import { Router } from 'express'

import RecipeController from './app/controllers/RecipeController'

const routes = Router()

/*
  http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}

  Exemplo:
  http://127.0.0.1/recipes/?i=onion,tomato
*/

routes.get('/recipes', RecipeController.index)

export default routes

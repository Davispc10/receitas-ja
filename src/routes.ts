import { Router } from 'express'

import RecipeController from './app/controllers/RecipeController'
import IngredientsToSearchValidator from './app/validators/IngredientsToSearch'

const routes = Router()

/*
  http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}

  Exemplo:
  http://127.0.0.1/recipes/?i=onion,tomato
*/

routes.get('/recipes', IngredientsToSearchValidator, RecipeController.index)

export default routes

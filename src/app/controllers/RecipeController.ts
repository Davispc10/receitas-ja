import { Request, Response } from 'express'

import GetRecipesByIngredients from '../services/GetRecipesByIngredientsService'

class RecipeController {
  public async index (req: Request, res: Response) {
    const { i } = req.query

    const ingredients = String(i)
      .split(',')
      .map(ingredient => ingredient.trim())

    if (ingredients.length > 3) {
      return res.status(400).json({ error: 'It\'s permitted up to 3 ingredients!' })
    }

    const getRecipesByIngredients = new GetRecipesByIngredients()

    try {
      const recipes = await getRecipesByIngredients.run(ingredients)

      return res.json({
        keywords: ingredients,
        recipes
      })
    } catch (err) {
      // throw new Error('Service currently unavailable!')
      return res.status(500).json({ error: 'Service currently unavailable!' })
    }
  }
}

export default new RecipeController()

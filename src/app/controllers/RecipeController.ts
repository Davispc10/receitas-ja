import { Request, Response } from 'express'

import GetGiphyByTitleRecipeService from '../services/GetGiphyByTitleRecipeService'
import GetRecipesByIngredients from '../services/GetRecipesByIngredientsService'

interface IRecipeWithGiphy {
  title: string,
  ingredients: string[],
  link: string,
  gif: string
}

class RecipeController {
  public async index (req: Request, res: Response) {
    const { i: ingredients } = req.query

    const parsedIngredients = String(ingredients)
      .split(',')
      .map(ingredient => ingredient.trim())

    if (parsedIngredients.length > 3) {
      return res.status(400).json({ error: 'It\'s permitted up to 3 ingredients!' })
    }

    try {
      const getRecipesByIngredients = new GetRecipesByIngredients()

      const recipes = await getRecipesByIngredients.run(parsedIngredients)

      const getGiphyByTitleRecipeService = new GetGiphyByTitleRecipeService()

      const recipesWithGiphy: IRecipeWithGiphy[] = []

      for (const recipe of recipes) {
        const giphy = await getGiphyByTitleRecipeService.run(recipe.title)

        recipesWithGiphy.push({
          title: recipe.title,
          ingredients: recipe.ingredients
            .split(',')
            .map(ingredient => ingredient.trim()),
          link: recipe.href,
          gif: giphy
        })
      }

      return res.json({
        keywords: parsedIngredients,
        recipes: recipesWithGiphy
      })
    } catch (err) {
      // throw new Error('Service currently unavailable!')
      return res.status(500).json({ error: 'Service currently unavailable!' })
    }
  }
}

export default new RecipeController()

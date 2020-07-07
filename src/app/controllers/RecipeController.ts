import { Request, Response } from 'express'

class RecipeController {
  public async index (req: Request, res: Response) {
    const { i: ingredients } = req.query

    return res.json(ingredients)
  }
}

export default new RecipeController()

import recipePuppyApi from './recipePuppyApi'

interface IRecipe {
  title: string,
  href: string,
  ingredients: string,
  thumbnail: string
}

class GetRecipesByIngredientsService {
  public async run (ingredients: string[]): Promise<IRecipe[]> {
    const response = await recipePuppyApi.get('', {
      params: {
        i: ingredients.join(',')
      }
    })

    const recipes: IRecipe[] = response.data.results

    return recipes
  }
}

export default GetRecipesByIngredientsService

import GetRecipesByIngredientsService from '../../app/services/GetRecipesByIngredientsService'

describe('GetRecipesByIngredients', () => {
  it('should be able to get the recipes', async () => {
    const getRecipesByIngredientsService = new GetRecipesByIngredientsService()

    const recipes = await getRecipesByIngredientsService.run(['tomato', 'eggs'])

    expect(recipes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Hash and Eggs',
          href: 'http://www.nibbledish.com/people/Endymion/recipes/hash-and-eggs',
          ingredients: 'eggs, tomato, hot sauce',
          thumbnail: 'http://img.recipepuppy.com/532244.jpg'
        })
      ])
    )
  })
})

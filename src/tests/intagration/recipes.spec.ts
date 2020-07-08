import request from 'supertest'

import app from '../../app'

describe('Recipe', () => {
  it('should be able to get with giphy search by ingredients', async () => {
    const response = await request(app).get('/recipes/?i=tomato, eggs')

    expect(response.status).toBe(200)

    expect(response.body).toEqual(
      expect.objectContaining({
        keywords: ['tomato', 'eggs'],
        recipes: expect.arrayContaining([
          expect.objectContaining({
            title: 'Hash and Eggs',
            ingredients: [
              'eggs',
              'tomato',
              'hot sauce'
            ],
            link: 'http://www.nibbledish.com/people/Endymion/recipes/hash-and-eggs'
            // gif: 'https://media0.giphy.com/media/qJkRbWM1MfVjq/giphy.gif?cid=283e22982b66eda1a0dbd7f7d7faa6c15e0e8ff02bf640c1&rid=giphy.gif'
          })
        ])
      })
    )
  })

  it('should not be able to get with more than 3 ingredients', async () => {
    const response = await request(app).get('/recipes/?i=tomato, eggs, orange, lemons')

    expect(response.status).toBe(400)
  })

  it('should not be able to get without ingredients', async () => {
    const response = await request(app).get('/recipes/')

    expect(response.status).toBe(400)
  })
})

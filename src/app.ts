/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import Youch from 'youch'

import routes from './routes'

import './bootstrap'

class App {
  public server: express.Application

  public constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  private middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  private routes () {
    this.server.use(routes)
  }

  private exceptionHandler () {
    this.server.use(async (err: any, req: Request, res: Response, next: NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()

        return res.status(500).json(errors)
      }
    })
  }
}

export default new App().server

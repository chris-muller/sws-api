import express from 'express'
import * as companyController from './controllers/companyController'

const router = express.Router()

/*
  If we had a lot more routes than this project has, I would probably
  break them apart into separate files based on concern in a `/routes`
  folder. eg. authentication, company info, blog/content, order/purchase
  routes etc.
*/
router.use((req, res, next) => {
  console.log(`Request: ${req.originalUrl} Time: ${Date.now()}`)
  next()
})

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/company', companyController.index)

export default router

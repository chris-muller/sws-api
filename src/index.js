import express from 'express'
import config from './config'
import routes from './routes'
import models from './models'

// Test db setup works
models()

/* 
  This is where additional setup/configuration or bootstrap code would go
*/

// Log unhandled rejections when not in production to help troubleshoot where they occur
if (!config.PRODUCTION) {
  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason)
  })
}

const app = express()

// Configure routes
app.use('/', routes)

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`)
})

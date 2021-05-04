// Model importing inspired from example code found in:
// https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js
import { Sequelize } from 'sequelize'
import config from './config'
import * as modelDefiners from './models'

const sequelize = new Sequelize(config.DATABASE_CONN_STRING)

export default async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

// We define all models according to their files
Object.values(modelDefiners).forEach((modelDefiner) => modelDefiner(sequelize))

// Apply any associations that have been configured
Object.values(modelDefiners)
  .filter((md) => md.hasOwnProperty('associate'))
  .forEach((modelDefiner) => {
    modelDefiner.associate(sequelize.models)
  })

const models = {
  sequelize,
  Sequelize,
  ...sequelize.models,
}

export default models

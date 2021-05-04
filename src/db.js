// Model importing inspired from example code found in:
// https://github.com/sequelize/express-example/blob/master/express-main-example/sequelize/index.js
import { Sequelize } from 'sequelize'
import config from './config'
import * as modelDefiners from './models'

export const sequelize = new Sequelize(config.DATABASE_CONN_STRING)

// We define all models according to their files
Object.values(modelDefiners).forEach((modelDefiner) => modelDefiner(sequelize))

// Configure model associations
sequelize.models.company.hasMany(sequelize.models.companyPriceClose, {
  sourceKey: 'id',
  foreignKey: 'company_id',
})

sequelize.models.company.hasOne(sequelize.models.companyScore, {
  sourceKey: 'id',
  foreignKey: 'company_id',
})

export default sequelize

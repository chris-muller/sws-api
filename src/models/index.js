import { Sequelize } from 'sequelize'
import config from '../config'

const sequelize = new Sequelize(config.DATABASE_CONN_STRING)

export default async () => {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

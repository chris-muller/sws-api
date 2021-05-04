import 'dotenv/config';

const { NODE_ENV } = process.env

/* 
  Here the majority of configuration can be added for each environment
  leaving only sensitive/secret information to be saved in the .env file

  base: Configuration that is typically the same across environments
  development: Values that are used for local development
  test: values used when running tests
  production: values to be used in production environment 
*/
const configurations = {
  base: {
    PORT: 3000,
    DEVELOPMENT: false,
    TEST: false,
    PRODUCTION: false,
  },
  development:{
    DEVELOPMENT: true
  },
  test:{
    TEST: true
  },
  production:{
    PRODUCTION: true
  },
}

export default {
  ...configurations.base,
  ...configurations[NODE_ENV],
  ...process.env,
}

import * as dotenv from 'dotenv'

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_SERVER = 'localhost' } = process.env

const config = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  server: DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export {
  config
}
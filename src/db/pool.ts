import mssql from 'mssql'
import { config } from '../config'

export const connect = async () => {
  const pool = new mssql.ConnectionPool(config)
  return await pool.connect()
}
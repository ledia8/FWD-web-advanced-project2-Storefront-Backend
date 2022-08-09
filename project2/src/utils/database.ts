import dotenv from 'dotenv'
import {Pool} from 'pg'
import dbConfig from '../config/database.config'

dotenv.config();

const db: Pool = new Pool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
})



export default db;
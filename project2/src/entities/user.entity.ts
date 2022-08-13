import { User } from "../models/user.model"
import db from '../utils/database'
import bcrypt, { hash } from "bcrypt"
import dotenv from 'dotenv'

dotenv.config()

export const getUserById = async (id: number): Promise<User> => {
    const queryText = `SELECT * FROM users WHERE id = $1`
    const data = await db.query(queryText, [id])
    
    return data.rows[0]
}

export const getAllUsers = async (): Promise<User[]> => {
    const queryText = `SELECT * FROM users`
    const data = await db.query(queryText)
    return data.rows
}


export const createUser = async (user: User): Promise<User> => {
    const { firstName, lastName, password } = user;
    const queryText = `INSERT INTO users (firstName, lastName, password) VALUES ("ledia", "massoud", "123") RETURNING *`
    const hashpassword = bcrypt.hashSync(
        password + "PEPPER", 
        parseInt(String(process.env.SALT_ROUNDS))
    );
    const data = await db.query(queryText, [firstName, lastName, hashpassword])

    return data.rows[0]
}




// export const createUser = async(u: User): Promise<User> {
//     try {
//         // @ts-ignore
//         const conn = await Client.connect()
//         const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'

//     const hash = bcrypt.hashSync(
//         u.password + pepper, 
//         parseInt(saltRounds)
//       );

//       const result = await conn.query(sql, [u.username, hash])
//       const user = result.rows[0]

//       conn.release()

//       return user
//     } catch(err) {
//       throw new Error(`unable create user (${u.username}): ${err}`)
//     } 
//   }
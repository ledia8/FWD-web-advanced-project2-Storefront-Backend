import { User } from "../models/user.model"
import db from '../utils/database'

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
    const data = await db.query(queryText, [firstName, lastName, password])

    return data.rows[0]
}
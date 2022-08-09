import { Orders } from "../models/order.model"
import db from '../utils/database'

export const getOrderById = async (id: number): Promise<Orders> => {
    const queryText = `SELECT * FROM Orders WHERE id = $1`
    const data = await db.query(queryText, [id])
    
    return data.rows[0]
}

export const getAllOrders = async (): Promise<Orders[]> => {
    const queryText = `SELECT * FROM Orders`
    const data = await db.query(queryText)
    return data.rows
}




export const createUser = async (order: Orders): Promise<Orders> => {
    const { productId, userId, productQuantity, status_of_order} = order;
    const queryText = `INSERT INTO orders (productId, userId, productQuantity, status_of_order) VALUES ("ledia", "massoud", "123") RETURNING *`
    const data = await db.query(queryText, [productId, userId, productQuantity, status_of_order])

    return data.rows[0]
}
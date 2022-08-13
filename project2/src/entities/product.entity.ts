import { Product } from '../models/product.model';
import db from '../utils/database'

export const getProductById = async (id: number): Promise<Product> => {
    const queryText = `SELECT * FROM Product WHERE id = $id`
    const data = await db.query(queryText, [id])
    
    return data.rows[0]
}

export const getAllProduct = async (): Promise<Product[]> => {
    const queryText = `SELECT * FROM Product`
    const data = await db.query(queryText)
    return data.rows
}

export const createProduct = async (Product: Product): Promise<Product> => {
    const { name, price, category } = Product;
    const queryText = `INSERT INTO Product (name, price, category) VALUES (?, ?, ?) RETURNING *`;
    //console.log("query of create product ---   " + queryText);
    const data = await db.query(queryText, [name, price, category]);
    //console.log("data of create product ---   " + data);
    return data.rows[0];
}


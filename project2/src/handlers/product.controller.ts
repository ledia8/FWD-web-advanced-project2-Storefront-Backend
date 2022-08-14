import express, { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { getProductById, getAllProduct, createProduct} from '../entities/product.entity';


//Index: show all products
export const show = async(req:Request, res:Response) => {
    res.send('show products\n   ' + getAllProduct());
}

//get product by id or Index
export const index = async(req:Request, res:Response) => {
	let id: number = 0;
    id = Number(req.query.id);
    console.log("id------------------------------------ " + id);
    const product=  getProductById(id);
    res.send(product);
}

//create product
export const create = async(req:Request, res:Response) => {
    let name = String(req.query.name);
    let price = Number(req.query.price);
    let category = String(req.query.category);
    let P: Product = { name, price, category };    
    createProduct(P);
	res.send("new product added  " + P);
}


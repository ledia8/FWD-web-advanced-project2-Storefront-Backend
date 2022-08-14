import { Request, Response } from "express";
import {Orders} from '../models/order.model';
import {getOrderById,getAllOrders, createOrder} from '../entities/order.entity'


//order
//Index [token required]
export const index = async(req:Request, res:Response) => {
    try {
        res.send('show orders\n   ' + getAllOrders());
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}
//Show [token required]
export const show = async(req:Request, res:Response) => {
    try {
        let id: number = 0;
        id = Number(req.query.id);
        const order=  getOrderById(id);
        res.send(order);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

//Create order
export const create = async(req:Request, res:Response) => {
    let productId = Number(req.query.productId);
    let userId = Number(req.query.userId);
    let productQuantity = Number(req.query.productQuantity);
    let status_of_order = String(req.query.status_of_order);

    let  order: Orders = { productId, userId, productQuantity, status_of_order};   
    createOrder(order);
	res.send("new user added  " + order);
}

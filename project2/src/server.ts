import express, { Request, Response } from 'express';
import { Product } from './models/product.model';
import {User} from './models/user.model'
import {Orders} from './models/order.model';
import { getProductById, getAllProduct, createProduct} from './entities/product.entity';
import {getUserById, getAllUsers, createUser} from './entities/user.entity';
import {getOrderById,getAllOrders, createOrder} from './entities/order.entity'
import cors from 'cors';
import bodyParser from 'body-parser';
import { idText } from 'typescript';
import { Pool } from 'pg';


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

// const orderRoutes = (app: express.Application) => {
//     app.get('/orders', index)
//     app.get('/orders/:id', show)
//     app.post('/orders', create)
//     // add product
//     app.post('/orders/:id/products', addProduct)
// }

//API Endpoints **Example**: A SHOW route: 'blogs/:id' [GET] 
//Index: show all products
app.get('/Products',function (req: Request, res: Response) {
    res.send('show products\n   ' + getAllProduct());
})

//get product by id or Index
app.get('/Products/id',function (req: Request, res: Response) {
	let id: number = 0;
    id = Number(req.query.id);
    console.log("id------------------------------------ " + id);
    const product=  getProductById(id);
    res.send(product);
})

//create product
app.get('/add_product',function (req: Request, res: Response) {
    let name = String(req.query.name);
    let price = Number(req.query.price);
    let category = String(req.query.category);
    let P: Product = { name, price, category };    
    createProduct(P);
	res.send("new product added  " + P);
})


//user
//Index [token required]
app.get('/user', (req: Request, res: Response) => {
    try {
        res.send('show users\n   ' + getAllUsers());
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})
//Show [token required]
app.get('/user/:id', (req: Request, res: Response) => {
    try {
        let id: number = 0;
        id = Number(req.query.id);
        const user=  getUserById(id);
        res.send(user);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})


//Create user
app.get('/add_user',function(req:Request, res:Response){
    let fname :string= String(req.query.fname);
    let lname:string = String(req.body.lname);
    let password:string = String(req.body.password);
    // let u: User = {fname, lname, password };    
    // createUser(u);
	res.send("new user added  " + fname +"   --- " + lname +"   ---  " + password);
})

//order
//Index [token required]
app.get('/order', (req: Request, res: Response) => {
    try {
        res.send('show orders\n   ' + getAllOrders());
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})
//Show [token required]
app.get('/order/:id', (req: Request, res: Response) => {
    try {
        let id: number = 0;
        id = Number(req.query.id);
        const order=  getOrderById(id);
        res.send(order);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

//Create order
app.get('/add_order',function(req:Request, res:Response){
    let productId = Number(req.query.productId);
    let userId = Number(req.query.userId);
    let productQuantity = Number(req.query.productQuantity);
    let status_of_order = String(req.query.status_of_order);

    let  order: Orders = { productId, userId, productQuantity, status_of_order};   
    createOrder(order);
	res.send("new user added  " + order);
})




app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;
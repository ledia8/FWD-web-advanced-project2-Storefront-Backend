import express, { Request, Response } from 'express'
import { getProductById } from './entities/product.entity';
import cors from 'cors'
import bodyParser from 'body-parser'


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

//API Endpoints **Example**: A SHOW route: 'blogs/:id' [GET] 
//products
app.get('/Products',function (req: Request, res: Response) {
    /**
     *  Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

     */
    res.send('show products')
})
//Index
app.get('/Products/id',function (req: Request, res: Response) {

    const product= req.query.getProductById;

    res.send(product);
})
//user
//Index [token required]
app.get('/user', (req: Request, res: Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})
//Show [token required]
app.get('/user/:id', (req: Request, res: Response) => {
    try {

        res.send('this is the SHOW route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})


app.get('/user',function(req:Request, res:Response){
    /**
     * 
- 
- Create N[token required]
     */
res.send("show users")
})

//order
app.get('/order',function(req:Request, res:Response){
/**
 * Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

 */

    res.send("show orders")
})



app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

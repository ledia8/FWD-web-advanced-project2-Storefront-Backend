import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const address: string = "0.0.0.0:4000"

app.use(bodyParser.json())

app.get('/testp', function (req: Request, res: Response) {
    res.send('Hello World!from product')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
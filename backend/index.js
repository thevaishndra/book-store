import express from 'express'
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

//option 1 middleware for handling cors policy
app.use(cors())
//option 2 allow custom origin
// app.use(
//   cors({
//     origin : 'http://localhost:3000',
//     methods : ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders : ['Content-Type']
//   })
// )

//server connect
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('mern stack project learning')
});

app.use('/books', booksRoute)

//databse connect
mongoose //mongoose lets us interact with mongodb easily using javascript commands
.connect(mongoDBURL)
.then(() => {
    console.log('app connected to database')
    app.listen(PORT, () => {//we want our server to run only if our database is connected
      console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
})
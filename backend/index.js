import express from 'express'
import { PORT, mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import { Book } from './models/book.model.js'
import booksRoute from './routes/booksRoute.js'

const app = express();

//middleware for parsing request body
app.use(express.json());


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
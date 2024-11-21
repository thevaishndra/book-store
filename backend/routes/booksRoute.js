import express from 'express'
import { Book } from '../models/book.model'
const router = express.Router()

//route for save a new book
router.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.genre ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields : title, author, genre, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
}); //post method is used to create new book

//route for getting all books from database
router.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route for getting one book from database by id
router.get("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json({ book });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route for update a book
router.put("/books/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.genre ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields : title, author, genre, publishYear",
      });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response
        .status(200)
        .send({ message: "Book updated successfully" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;

    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.genre ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields : title, author, genre, publishYear",
      });
    }

    const result = await Book.findByIdAndUpdate(id, request.body, {
      new: true,
    }); // `new: true` returns the updated document.

    if (!result) {
      return response.status(404).send({ message: "Book not found" });
    }

    return response
      .status(200)
      .send({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route for delete a book
router.delete("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

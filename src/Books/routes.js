const { Router } = require("express");
const bookRouter = Router();

// const Book = require("./model");

const {
  addBook,
  getAllBooks,
  updateAuthorByTitle,
  deleteBookByTitle,
  deleteAllBooks,
  getBookByTitle,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.get("/books/:title", getBookByTitle);

bookRouter.put("/books/:title", updateAuthorByTitle);

bookRouter.delete("/books/:title", deleteBookByTitle);

bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;

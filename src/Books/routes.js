const { Router } = require("express");
const bookRouter = Router();

// const Book = require("./model");

const { addBook, getBooks, updateBook, deleteBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getBooks", getBooks);

bookRouter.put("/books/updateBook", updateBook);

bookRouter.delete("/books/deleteBook", deleteBook);

module.exports = bookRouter;

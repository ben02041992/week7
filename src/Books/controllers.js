const Book = require("./model");

const addBook = async (request, response) => {
  try {
    console.log("request.body ", request.body);
    const book = Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log(book);
    response.send({ message: "book created", book });
  } catch (error) {
    error.message({ message: "wrong", error: error });
  }
};

const getBooks = async (request, response) => {
  const books = await Book.find({});
  response.send({ message: "success all the books", books: books });
};

const logTypeOfResult = async (result) => {
  console.log(`Typeof result: ${typeof result} - result: ${result}`);
};

const updateBook = async (request, response) => {
  console.log(request.body);
};

const deleteBook = async (request, response) => {
  response.send({ message: "book deleted" });
};

module.exports = {
  addBook,
  getBooks,
  logTypeOfResult,
  updateBook,
  deleteBook,
};

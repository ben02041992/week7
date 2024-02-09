const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send({ message: "book created", newBook });
  } catch (error) {
    console.error("error creating book", error);
    res.status(500).send({ message: "internal server error" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send({ message: "showing all books", books });
  } catch (error) {
    console.error("Error getting books", error);
    res.status(500).send({ message: "internal server error" });
  }
};

const updateAuthorByTitle = async (req, res) => {
  const { title } = req.params;
  const { author } = req.body;
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { title },
      { author },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).send({ message: "book not found" });
    }
    res
      .status(200)
      .send({ message: "successfully updated author: ", updatedBook });
  } catch (error) {
    console.error("error updating author", error);
    res.status(500).send({ message: "Internal server error", error });
  }
};

const deleteBookByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const deletedBook = await Book.findOneAndDelete({ title });
    if (!deletedBook) {
      return res.status(404).send({ message: "book not found" });
    }
    res
      .status(200)
      .send({ message: "book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("error deleting book", error);
    res.status(500).send({ message: "Internal server error", error });
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const deleteAll = await Book.deleteMany();
    req.status(200).send({ message: "All books deleted", result: deleteAll });
  } catch (error) {
    console.error("error deleting all books", error);
    res.status(500).send({ message: "internal server error", error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateAuthorByTitle,
  deleteBookByTitle,
  deleteAllBooks,
};

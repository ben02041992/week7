const express = require("express");

const app = express();

const books = [];
book_id = 1;

app.use(express.json());

app.get("/books", (request, response) => {
  response.send({ message: "success", books: books });
});

app.post("/books", (request, response) => {
  const book = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  };

  console.log(books);

  const successResponse = {
    message: "Book added",
    books: book,
  };

  books.push(book);
  response.send(successResponse);
});

app.put("/books", (request, response) => {
  console.log(request);
});

app.delete("/books", (request, response) => {
  let findBook;
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === request.body.title) {
      const newBooks = books.splice(i, 1);
      console.log(newBooks);
      response.send({ message: "deleted", books: [newBooks] });
    }
    console.log(findBook);
  }
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

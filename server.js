const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get a book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Add a new book
app.post('/books', (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: "Book deleted" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

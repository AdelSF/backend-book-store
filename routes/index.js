const express = require('express')
const app = express.Router()
const db = require('../database')


app.get('/books', (req, res) => {
    db.getAllBooks()
    .then(books => {
        res.send(books)
    })
})

app.get('/:id', (req, res) => {
    db.getBookById(req.params.id)
    .then(book => {
        res.send(book[0])
    })
})

app.post('/book', (req, res) => {
    const dummyBook = req.body
    db.postABook(dummyBook)
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        console.log('error => ', error);
    })
})


app.put('/editbook', (req, res) => {
    console.log("this is a edit route")
    // const editedBook = req.body
    // db.editABook()
})

module.exports = app
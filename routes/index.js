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

// 3rd here
app.put('/editbook', (req, res) => {
    db.editABook(req.body) // mire be database =>
    // console.log('req.body => ', req.body);
    // stopped
    // 5th here -  az database return mishe va mire to result
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        console.log('error => ', error);
    })
})

app.post('/adduser', (req, res) => {
    const newUser = req.body
    db.postAUser(newUser)
    .then(result => {
        console.log('you hit adduser route => ')
        res.send(result)
    })
    .catch(error => {
        console.log('error => ', error);
    })
})

module.exports = app
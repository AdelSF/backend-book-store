const express = require('express')
const app = express.Router()
const jwt = require('jsonwebtoken');
const db = require('../database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const privateKey = 'vwgdlgwksh3473##!'

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



app.post('/signin', (req, res) => {
    const { email, password } = req.body
    db.findUser(email)
    .then(user => {
        if (user.length > 0) {
            const hash = user[0].password
            bcrypt.compare(password, hash, function(err, result) {
                if (result) {
                    delete user[0].password
                    let token = jwt.sign({ user: user[0] }, privateKey, { expiresIn: '1h' })
                    res.status(200).send({token})
                } else {
                    res.status(401).send({error: 'Email/Password in wrong!'})
                }
            })
        } else {
            res.status(401).send({error: 'Email/Password in wrong!'})
        }
    })
})

app.post('/signup', (req, res) => {
    const { fname, lname, email, password } = req.body
    db.findUser(email)
    .then(result => {
        if(result.length === 0) {
            bcrypt.hash(password, saltRounds, function(err, hash) {
                db.postAUser({ fname, lname, email, hash })
                .then(result => {
                    res.status(200).send({msg: 'User was successfully created!'})
                })
                .catch(error => {
                    console.log('error => ', error);
                })
            })
        } else {
            res.status(409).send({error: 'User already exist!'})
        }
    })
    .catch(error => {
        res.send({msg: 'Something went wrong!', error})
    })
})

module.exports = app
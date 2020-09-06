const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const routes = require('./routes')

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
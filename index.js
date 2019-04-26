const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 2000
const movieRouter = require('./3.router/movieRouter')

app.use(bodyParser.json())

app.use('/movie', movieRouter)

app.get('/', (req, res) => {
    res.send('<h1> Selamat Datang di Api Ujian Back End</h1>')
})

app.listen(port, () => console.log('Berjalan di Port ' + 2000))
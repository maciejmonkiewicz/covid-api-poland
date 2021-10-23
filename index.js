const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
const PORT = 3000

app.get('/help', (req, res) => {
    res.json({
        message: 'Welcome to the help route!'
    })
})

app.listen(PORT, () => console.log(`Covid-19 stats API is running on port ${PORT}`))
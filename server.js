const express = require('express')

const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'a4be7947a99f479bb2a1788872c24551',
    captureUncaught: true,
    captureUnhandledRedjections: true
})

const app = express ()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.port || 4545

app.listen(port, () => console.log(`On ${port}`))
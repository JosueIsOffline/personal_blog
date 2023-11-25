// Import necessary modules
const Express = require('express')
const chalk = require('chalk')
require('dotenv').config()


const app = Express()
const port = process.env.PORT || 5000


app.use('/', (req, res) => {
    res.send('<h1>GoodBye World!</h1>')
})


app.listen(port, () => {
    console.log(chalk.hex('#000fff')`http://localhost:${port}`)
})



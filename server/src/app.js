// Import necessary modules
const Express = require('express')
const chalk = require('chalk')
require('dotenv').config()


const app = Express()
const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(chalk.hex('#092664')`http://localhost:${port}`)
})



// Import necessary modules
const Express = require('express')
require('dotenv').config()


const app = Express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})



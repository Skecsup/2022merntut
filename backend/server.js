const express = require('express')
const dotenv  = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
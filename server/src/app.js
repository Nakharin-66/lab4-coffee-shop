const express = require('express')
const app = express()
const userRoutes = require('./routes/user')

// middleware
app.use(express.json())

// route
app.use('/', userRoutes)

// start server
const PORT = 8081
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

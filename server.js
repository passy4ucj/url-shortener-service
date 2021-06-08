const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')



//Load env vars
dotenv.config({ path: './config/config.env' })


// Connect to database
connectDB()

//Route files
const urls = require('./routes/urlRoutes')

const app = express()

// Body Parser
app.use(express.json())


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

// Mount routers
app.use('/api', urls)

//Use error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, 
        console.log(`Server running on ${process.env.NODE_ENV} mode in PORT ${process.env.PORT}`.yellow.bold))
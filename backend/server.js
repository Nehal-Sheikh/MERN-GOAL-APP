const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')

const activityRoute = require('./routes/goalRoutes')
const userRoute = require('./routes/userRoutes')

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', activityRoute)
app.use('/api/users', userRoute)

app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`))
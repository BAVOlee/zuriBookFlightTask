const express = require('express')
const bodyParser = require('body-parser')
const flights = require('./routes/flightRoute')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())

app.use('/flights', flights)

app.get('/', (req, res) => {
	res.send("My Flight-api task");
})

const PORT = process.env.PORT || 3003

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))


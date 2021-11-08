const express = require('express')
const ejs = require('ejs')
const os = require('os')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Middleware
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  res.render('index', arr)
})

app.post('/order', (req, res) => {
  const pizzaOrder = req.body
  console.log('This is changed for some reason')
  res.render('pizza', pizzaOrder)
})

// app.get('/pizza', (req, res) => {
//   res.render('index')
// })

// Start Server
let server = app.listen(3000, () => {
  console.log('Server is running on port', server.address().port)
  let networkInfo = os.networkInterfaces()
  let network = networkInfo['Wi-Fi']

  network.forEach((item) => {
    if (item.family === 'IPv4') console.log(item.address)
  })
})

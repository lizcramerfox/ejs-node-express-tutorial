const express = require('express')
let path = require('path')
const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// setup public folder for static files
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/links', (req, res) => {
  let items = [
    {name: 'node.js', url: 'https://nodejs.org/en/'},
    {name:'ejs',url:'https://ejs.co'},
    {name:'expressjs',url:'https://expressjs.com'},
    {name:'vuejs',url:'https://vuejs.org'},
    {name:'nextjs',url:'https://nextjs.org'},
  ]
  res.render('pages/links', { links: items })
})

app.get('/list', (req, res) => {
  let items = ['node.js', 'expressjs', 'ejs', 'javascript', 'bootstrap']
  res.render('pages/list', { list: items })
})

app.get('/table', (req, res) => {
  let items = [
    {name:'node.js',url:'https://nodejs.org/en/'},
    {name:'ejs',url:'https://ejs.co'},
    {name:'expressjs',url:'https://expressjs.com'},
    {name:'vuejs',url:'https://vuejs.org'},
    {name:'nextjs',url:'https://nextjs.org'}
  ]
  res.render('pages/table', { table: items })
})

// Middleware for alert messages
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
function messages(req, res, next) {
  let message
  res.locals.message = message
  next()
}
app.get('/form', messages, (req, res) => {
  res.render('pages/form')
})

app.post('/form', (req, res) => {
  let message = req.body
  res.locals.message = message
  res.render('pages/form') 
})

app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`))
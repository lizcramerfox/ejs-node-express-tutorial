const express = require('express')
var path = require('path');
const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup public folder for static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('pages/home')
});

app.get('/links', (req, res) => {
  let items = [
    {name: 'node.js', url: 'https://nodejs.org/en/'},
    {name:'ejs',url:'https://ejs.co'},
    {name:'expressjs',url:'https://expressjs.com'},
    {name:'vuejs',url:'https://vuejs.org'},
    {name:'nextjs',url:'https://nextjs.org'},
  ];
  res.render('pages/links', { links: items })
})

app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));
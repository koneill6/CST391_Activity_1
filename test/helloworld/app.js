const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World this is Kody from Minnesota!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/hello', function (_req, res)
{
res.render('index', { title: 'Hello World', message: 'Hello world!' })
})
app.use(express.static('public'))

const express = require('express')
const app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendfile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('poke app listening on port 3000!'))

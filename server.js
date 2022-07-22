const express = require('express')
const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

// static files
app.use(express.static('public'))

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.raw());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.post('/api/post-waitinglist', (req, res) => {
    appenWaitinglist(req.body)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
})

function appenWaitinglist(data) {
    fs.readFile('./database/waitinglist.json', 'utf-8', (err, rawFile) => {
        const file = JSON.parse(rawFile)
        if (err) {
            console.log('error', err);
            return false
        }
        const exist = file.some(checkEmailExist)
        if (exist) {
            return false
        }
        else {
            file.push(data)
            fs.writeFileSync('./database/waitinglist.json', JSON.stringify(file));
            console.log('success');
            return true
        }
    })
    const checkEmailExist = obj => obj.email === data.email;
}

module.exports = app;
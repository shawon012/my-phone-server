const express = require('express');
const cors = require('cors');
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('my phooooooooooone information coming soon')
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id: ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port, () =>{
    console.log(`My phone server is running on port: ${port}`)
})


// echo "# my-phone-server" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/my-phone-server.git
// git push -u origin main
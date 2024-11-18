const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`sono in ascolto sulla porta numero ${port}`)
})

app.get('/', (req, res) => {
    res.send("Server del mio blog")
  })
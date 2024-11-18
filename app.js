const express = require('express');
const app = express();//creiamo un server
const port = 3000; //andiam0o a dare un numero per la porta

app.listen(port, () => {  //mettiamo il server in ascolto alla porta numero 3000
    console.log(`sono in ascolto sulla porta numero ${port}`)
})

app.get('/', (req, res) => { //alla richiesta  di tipo get verso la rotta url base, si rispondera con quello che è dentro il .send
    res.send("Server del mio blog")
  })
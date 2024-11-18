const express = require('express');
const app = express();//creiamo un server
const port = 3000; //andiam0o a dare un numero per la porta
app.use(express.static('public')) //rendiamo publica la cartella public
const array = require("./array.js"); //importiamo l'array 

let count = 0;
array.array.forEach((el)=>{
    count += 1;
})
console.log(count)

app.listen(port, () => {  //mettiamo il server in ascolto alla porta numero 3000
    console.log(`sono in ascolto sulla porta numero ${port}`)
})

app.get('/', (req, res) => { //alla richiesta  di tipo get verso la rotta url base, si rispondera con quello che è dentro il .send
    res.send("Server del mio blog")
})

app.get('/bacheca', (req, res) => { //alla richiesta  di tipo get verso la rotta url base, si rispondera con quello che è dentro il .send
    res.json(array)
})
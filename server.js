const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const server = express();

server.use(bodyParser.json());
//mysql
const connection = mysql.createConnection({
    host       :   'bxarti5uv4vopmmni1i0-mysql.services.clever-cloud.com',
    user       :   'uq3vruf4b6lbifjl',
    password   :   'GDyQwVjHOTrgS4biT74K',
    database   :   "bxarti5uv4vopmmni1i0",
});

//Route
app.get('/', (req, res)=>{
    res.send('Welcome to my API!!');
})

//check connect
connection.connect(error =>{
if (error) throw error;
console.log('database server running!');
});
server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
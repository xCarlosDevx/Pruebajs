const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
        "host":"bxarti5uv4vopmmni1i0-mysql.services.clever-cloud.com",
        "user":"uq3vruf4b6lbifjl",
        "password":"GDyQwVjHOTrgS4biT74K",
        "database":"bxarti5uv4vopmmni1i0"
});

// Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});


// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

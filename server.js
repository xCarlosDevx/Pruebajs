const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const server = express();

server.use(bodyParser.json());
//mysql
const connection = mysql.createConnection({
    host: 'bxarti5uv4vopmmni1i0-mysql.services.clever-cloud.com',
    user: 'uq3vruf4b6lbifjl',
    password: 'GDyQwVjHOTrgS4biT74K',
    database: "bxarti5uv4vopmmni1i0",
});

//Route
server.get('/start', (req, res) => {
    res.send('Bienvenido a mi API!!');
})

//Todos las categorias
server.get('/categorias', (req, res) => {
    const sql = 'SELECT * FROM categorias';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No recibimos nada');
        }
    });
});
// Todas las categorias
server.get('/categorias', (req, res) => {
    res.send('Lista de categorias');
});

server.get('/categorias/:id', (req, res) => {
    const {
        id
    } = req.params
    const sql = `SELECT * FROM categorias WHERE id = ${id}`;

    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No recibimos nada');
        }
    });
});

server.post('/agregar', (req, res) => {
    const sql = 'INSERT INTO categorias SET ?'

    const categoriasObj = {
        categoria: req.body.name
    }
    connection.query(sql, categoriasObj, error => {
        if (error) throw error;
        res.send('Categoria agregada');
    });
});

server.put('/actualizar/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        categoria
    } = req.body;
    const sql = `UPDATE categorias SET categoria = '${categoria}' WHERE id =${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Categoria actualizada');
    });
});

server.delete('/borrar/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        categoria
    } = req.body;
    const sql = `DELETE FROM categoria WHERE id= ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Categoria eliminada');
    });
});

//check connect
connection.connect(error => {
    if (error) throw error;
    console.log('database server running!');
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
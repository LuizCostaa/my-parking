const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_parking'
});
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.post('/login', (req, res) => {

    connection.query(`SELECT * from usuarios WHERE email = '${req.query.email}' `, function (error, results, fields) {
        if (error) throw error;

        if (results.length > 0) {
            if (results[0].senha === req.query.senha) {
                res.send({ 'Authenticaded': true });
            } else {
                res.send({ 'Authenticaded': false, "loginErrors": "Senha Inválida" });
            }
        } else {
            res.send({ 'Authenticaded': false, "loginErrors": "Usuário Inválido" });
        }

    });
});

app.get('/vagas', (req, res) => {

    connection.query(`SELECT * from locacao`, function (error, results, fields) {

        if (error) throw error;

        res.send(results);

    });

});

app.get('/vagas/:id', (req, res) => {

    connection.query(`SELECT * from locacao WHERE id = ${req.params.id}`, function (error, results, fields) {

        if (error) throw error;

        res.send(results);

    });

});

app.post('/vagas/:id', (req, res) => {

    console.log(req.body);

    connection.query(`UPDATE locacao SET nome_proprietario = ${req.body.nome_proprietario},
      placa = ${req.body.placa},
      data_check_in = ${req.body.data_check_in} WHERE id = ${req.params.id}`, function (error, results, fields) {

        if (error) throw error;

        console.log(results[0]);

        res.send(results);

    });

});


app.listen(port);
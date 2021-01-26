const express = require('express')
const routes = express.Router()
const instructors = require('./instructors') // chamando o arquivo de Instrutores (Criar, Deletar e Alterar)

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) { // Rota de Instrutores
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) { // Rota de inserção de Instrutores
    return res.render('instructors/create')
})

routes.post("/instructors", instructors.post) // Aplicamos ele diretamente na rota de POST que criamos

routes.get('/members', function(req, res) { //Rota de membros
    return res.send("members")
})

module.exports = routes
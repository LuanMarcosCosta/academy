// Variavel para 'File System'
const fs = require('fs')
const data = require("./data.json")


// Function CREATE 
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill a fields")
    }

    // Transformando a data no estilo 'Date.now'
    req.body.birth = Date.parse(req.body.birth)

    // Cria uma data de agopra, para depois usarmos em comparação a data de quando Instrutor entrou na academia
    req.body.create_at = Date.now()


    //começa vazio []
    data.instructors.push(req.body) // Após passar aqui vai ter valores [{...}], [{...}]

    // Depois de validar o dado é hora de escrever ele dentro do data.json que ele cria.
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write File Error!")

        return res.redirect("/instructors")
    })


    //return res.send(req.body)
}
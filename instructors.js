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


    // Desestruturando dados
    let { avatar_url, birth, name, services, gender } = req.body

    // Transformando a data no estilo 'Date.now'
    birth = Date.parse(birth)

    // Cria uma data de agopra, para depois usarmos em comparação a data de quando Instrutor entrou na academia
    const created_at = Date.now()

    // Para Criar uma chave Primária 
    const id = Number(data.instructors.length + 1)


    //começa vazio []
    data.instructors.push({
            id,
            avatar_url,
            name,
            birth,
            gender,
            services,
            created_at
        }) // Após passar aqui vai ter valores [{...}], [{...}]

    // Depois de validar o dado é hora de escrever ele dentro do data.json que ele cria.
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write File Error!")

        return res.redirect("/instructors")
    })


    //return res.send(req.body)
}
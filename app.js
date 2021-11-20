const express = require("express")

const app = express()
const port = 8080

app.get('/', controller)

function controller(req, res) {
try {
    console.log("acessando pela funcao controller")
    let list = {
        matheus: {
            peso: 80,
            altura: 1.75


        }
    }
    function calcula() {
        let ret = list.matheus.peso / (list.matheus.altura * list.matheus.altura)
        return ret.toString()

    } 

    res.send(calcula())
} catch (error) {
    res.status(500).send("ERRO INTERNO NO SERVIDOR")
}

}
app.listen(port)

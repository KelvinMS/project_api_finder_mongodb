const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json()); // As repostas precisam ser em Json para ser interpretadas de maneira mais fácil

//Iniciando a conexão com o banco de dados . Database testdb
mongoose.connect("mongodb://localhost:27017/testdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).catch(error => handleError(error));// Lidar com possiveis erros na conexão inicial.

//"Carrega" todos os models
requireDir("./src/models");

// Estou dizendo que toda requisição que chegar em /api vai seguir uma rota, que a routes.js vai verificar qual é a que deve ser seguida
app.use("/api",require("./src/routes"));

//Porta do server
app.listen(4444);



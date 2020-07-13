const mongoose = require("mongoose");

const SchemaTest = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    frente:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    plataforma:{
        type:String,
        required:true
    },
    sistema:{
        type:String,
        required:true
    },
    device:{
        type:String
    },
    beginDate: {
        type: Date,
        default: Date.now //Captura a data de criação
    }

});

//Cria o model Test, que vai seguir o esquema SchemaTest, criado a cima
//Um terceiro parametro do mongoose.model indica o nome da collection a ser acessada
mongoose.model("Test", SchemaTest,"log"); 
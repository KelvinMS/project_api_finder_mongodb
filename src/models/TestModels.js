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

mongoose.model("Test", SchemaTest,"log"); // Terceiro parametro mostra a collection que vai ser acessada
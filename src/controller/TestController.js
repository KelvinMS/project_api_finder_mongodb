const mongoose = require ("mongoose");

//Informa o schema que será utilizado.
const Test = mongoose.model("Test");

module.exports = {
    //await é valido apenas em funções async
    async searchAll(req, res) {
        const tests = await Test.find();
        return res.json(tests);
    },
    //await é valido apenas em funções async
    async store(req, res) {
        const tests = await Test.create(req.body); // Não esquecer de passar aqui o req.body que é oque será enviado
        return res.json(tests);
    },
    //await é valido apenas em funções async
    async show(req, res) {
        const tests = await Test.findById(req.params.id); // Não esquecer de passar aqui o req.body que é oque será enviado
        return res.json(tests);
    },
    //await é valido apenas em funções async
    async update(req, res) {
        const tests = await Test.findById(req.params.id, req.body, { new: true }); // esse new , se não colocar ele mostra o objeto antes da mudança, com o new manda o atualizado
        return res.json(tests);
    },
    // update -> Atualiza alguma propriedade de um produto
    async destroy(req, res) {
        const tests = await Test.findByIdAndRemove(req.params.id);
        return res.send();
    }
};
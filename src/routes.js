const express = require("express");
const routes = express.Router();

const TestController = require("./controller/TestController");


routes.get("/test", TestController.searchAll);
//O /:id é importante, pois indica que o caminho vai receber um valor, e este deve ser usado
routes.get("/test/:id", TestController.show); 
routes.post("/test", TestController.store);
routes.put("/test", TestController.update);
routes.delete("/test/:id",TestController.destroy);

module.exports = routes;

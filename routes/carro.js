module.exports = function (app) {
    var valida = require('./../middlewares/valida');     
    var carro = app.controllers.carro;
    app.post('/carro',  carro.newCarro);        
    app.get('/carro',  carro.listaCarros);
    app.get('/carro/:modelo',  carro.findCar);    
    app.delete('/carro/:id',  carro.removeCar);
    app.put('/carro/:id',  carro.atualizaCarro);
    
}; 
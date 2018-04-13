module.exports = function (app) {
    var Carro = app.models.carro;

    var carrosController = {
        newCarro: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario }; 

            var carro = new Carro(request.body.carro);                
            carro.save(function (err) {
                if (err) {
                    response.send(err);                        
                }   
                response.send(200)
            })
        },        
        listaCarros: function (request, response) {
            Carro.find(function (err, carros) {
                if (err) return console.error(err);
                response.send(carros);
              })
        }
    };
    return carrosController;
};
module.exports = function (app) {
    var Carro = app.models.carro;

    var carrosController = {
        newCarro: function (request, response) {
            var carro = new Carro(request.body);
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
        },
        removeCar: function (req, resp) {
            var reqId = req.params.id;

            Carro.remove({_id:reqId},function (err) {
                if (err) {
                    resp.statusCode = 404;
                    resp.send(err)
                    return console.error(err);
                }else{
                    resp.send(200);
                }
                
            })
        },
        atualizaCarro:function(req,resp){
            var reqId = req.params.id;
            Carro.findOneAndUpdate({_id:reqId},req.body, {upsert:true}, function(err, doc){
                if (err) return resp.send(500, { error: err });
                return resp.send("savo com sucesso");
            });
        }
    };
    return carrosController;
};
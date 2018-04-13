module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var carro = Schema({
        modelo: { type: String},
        ano: { type: Number },
        marca: { type: String },
        urlImagem :  { type: String }
        
    });
    return mongoose.model('carro', carro);
}; 
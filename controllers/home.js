module.exports = function (app) {

    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');
    var HomeController = {  
        index: function (request, response) {
            response.render('home/index');
        },
        login: function (request, response) {
            var nome
            var senha
            if(!request.body.usuario){
                nome = request.body.nome;
                senha = request.body.senha;
            }else{
                nome = request.body.usuario.nome;
                senha = request.body.usuario.senha;
            }

            var query = { 'nome': nome, 'senha': senha };
            Usuario.findOne(query).select('nome senha')
                .exec(function (erro, usuario) {
                    if (erro) {
                        response.redirect('/');
                    }
                    else {
                   		if(!usuario) {
                   			response.send(false)
	                 	}else{
                        	response.redirect('/menu');
	                 	}


                    }
                });
        },
        logout: function (request, response) {
            request.session.destroy();
            response.redirect('/');
        }

    };
    return HomeController;
};
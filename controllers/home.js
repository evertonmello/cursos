module.exports = function (app) {

    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');
    var HomeController = {  
        index: function (request, response) {
            response.render('home/index');
        },
        addUser(req, res){
            var nome
            var senha
            if(!req.body.usuario){
                nome = req.body.nome;
                senha = req.body.senha;
            }else{
                nome = req.body.usuario.nome;
                senha = req.body.usuario.senha;
            }

            var usuario = new Usuario({'nome':nome, 'senha':senha}); 

            usuario.save(function (err) {
                if (err) {
                    res.statusCode = 404;
                    res.send(err)
                    return console.error(err);
                    return handleError(err);                        
                }else{ 
                    res.send(200);
                                            
                }                    
              })
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
                        console.log("erro!!!!")
                        response.redirect('/');
                    }
                    else {
                   		if(!usuario) {
                   			response.status(401).send({});
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
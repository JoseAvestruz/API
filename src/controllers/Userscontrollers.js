const AppError = require('../utils/AppError')
class Userscontrollers{
    /*/
    * Index - GET para listar usuarios Registados
    * show - GET para exibir um registro especifico
    * Create - POST para criar um registro
    * Update - PUT para atualizar um registro
    * delete - DELETE para remover um registro
    */
   create(request,response) {
    
    const { name, email , password} = request.body
    if(!name) {
        throw new AppError('Nome e obrigatorio')
    }

    response.status(201).json({name , email , password})
   }
}

module.exports = Userscontrollers;
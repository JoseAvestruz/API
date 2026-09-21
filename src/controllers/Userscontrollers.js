const AppError = require('../utils/AppError')
const
 sqliteConection = require('../database/sqlite')
class Userscontrollers{
    /*/
    * Index - GET para listar usuarios Registados
    * show - GET para exibir um registro especifico
    * Create - POST para criar um registro
    * Update - PUT para atualizar um registro
    * delete - DELETE para remover um registro
    */
  async create(request,response) {
    
    const { name, email , password} = request.body
    const database = await sqliteConection()
    const checkUserExist =  await database.get('SELECT * FROM users where email = (?)', [email])

    if(checkUserExist) {
        throw AppError("Este E-mail já esta em uso")
    }
    return response.status(201).json();

   }
}

module.exports = Userscontrollers;
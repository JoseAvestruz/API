const AppError = require('../utils/AppError')
 sqliteConection = require('../database/sqlite')
 const {hash} = require("bcryptjs")
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
    await database.run("INSERT INTO users (name , email, password) VALUES (?, ?, ?)",
    [name, email, password]);
    return response.status(201).json();
   }

}

module.exports = Userscontrollers;
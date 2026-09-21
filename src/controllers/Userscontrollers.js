const AppError = require('../utils/AppError')
sqliteConection = require('../database/sqlite')
const { hash } = require("bcryptjs")
class Userscontrollers {
  /*/
  * Index - GET para listar usuarios Registados
  * show - GET para exibir um registro especifico
  * Create - POST para criar um registro
  * Update - PUT para atualizar um registro
  * delete - DELETE para remover um registro
  */
  async create(request, response) {

    const { name, email, password } = request.body
    const database = await sqliteConection()
    const checkUserExist = await database.get('SELECT * FROM users where email = (?)', [email])

    if (checkUserExist) {
      throw new AppError("Este E-mail já esta em uso")
    }
    const hashedPassword = await hash(password, 8)
    await database.run("INSERT INTO users (name , email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]);
    return response.status(201).json();
  } 

  async update(request, response) {
    const { name, email } = request.body
    const { id } = request.params
    const database = await sqliteConection()
    const user = await database.get('SELECT * FROM users HWERE id = (?)', [id])
    if (!user) {
      throw new AppError('Usúario Não Encotrado')
    }

    const userwitdhUpdatedEmail = await database.get('SELECT * FROM users where email = (?)', [email])
    if (userwitdhUpdatedEmail && userwitdhUpdatedEmail.id !== user.id){
      throw new AppError('Este E-mail já Esta em uso')
    }
    user.name = name;
    user.email = email;
    await database.run(`UPDATE users set 
        name = ? ,
        email = ?  ,
        updated_at = ?  ,
        where id =? `
        [user.name , user.email, new Date()]
      
      );
      return response.status(200).json()
  }
}
module.exports = Userscontrollers; 
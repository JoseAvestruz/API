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

    response.json({ name , email, password})
   }
}
module.exports = Userscontrollers;
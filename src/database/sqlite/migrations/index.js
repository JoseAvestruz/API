const sqliteConection = require("../../sqlite")
const createUser = require("./createUser")

async function  migrationsRun() {
    const shemas = [
        createUser
    ].join('')
    sqliteConection()
    .then(db => db.exec(shemas))
    .catch(error =>console.log(error))
}
module.exports = migrationsRun;
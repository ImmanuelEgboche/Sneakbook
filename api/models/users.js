const db = require("../dbConfig")

class User{
    constructor(data){
        this.username = data.username
        this.email = data.email
        this.password = data.password
    }
    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.query(`SELECT * FROM info;`)
                let users = result.rows.map(r => new User(r))
                resolve(users)
            } catch(err){
                reject(`There was a problem getting users${err}`)
            }
        })
    }

    static findByEmail(email) {
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.query(`SELECT * FROM info WHERE email = $1 RETURNING *;` [email])
                let user = new User(result.rows[0])
                resolve(user)
            } catch(err) {
                reject(`There was a problem finding email ${err}`)
            }
        })
    }

    static create(username, password, email){
        return new Promise(async( resolve, reject) => {
            try{
                let result = await db.query(`INSERT INTO info (username, password, email) VALUES ($1, $2, $3) RETURNING *;`, [username, password, email]);
                let newUser = new User(result.rows[0])
                resolve(newUser)
            } catch(err){
                reject(`There was a problem creating user: ${err}`)
            }
        })

    }
}

module.exports = User
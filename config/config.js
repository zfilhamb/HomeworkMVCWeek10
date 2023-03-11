const {Pool} = require("pg")
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"movies2",
    password:"kacangpolong",
    port:5432,
}); 

module.exports = pool;
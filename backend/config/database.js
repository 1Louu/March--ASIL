import mysql from "mysql2"; 

// Crée la connection à la base de donnée
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"asil",
}); 

export default db;
import mysql from "mysql2"; 

// Crée la connection à la base de donnée
const db=mysql.createConnection({
    host:"82.66.22.148",
    user:"editor-asil",
    password:"FiulioJgfdSascdDUF1U71R90F1JFjhijfduU",
    database:"asil",
}); 

export default db;
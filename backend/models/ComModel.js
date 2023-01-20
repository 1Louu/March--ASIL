//Importer connection
import db from "../config/database.js"; 

//Avoir tout commande
export const getCommandes=(result)=>{
    db.query("SELECT * FROM commande", (err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results); 
        };
    }); 
};

//Prendre un seul commande par ID
export const getCommandeByID=(idcom, result)=>{
    db.query("SELECT * FROM commande WHERE commande.idcom = ?", [idcom],(err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]); 
        };
    });
};

// Insérer un commande
export const insertCommande=(data,result)=>{
    db.query("INSERT INTO commande SET ?", [data],(err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results); 
        };
    });
};

// Mettre à Jour un commande par ID
export const updateCommande = (data, id, result)=>{
    db.query("UPDATE commande SET commande.quant = ?, commande.prixcom = ?, commande.datecom = ? WHERE commande.id = ?", [data.commande.quant, data.commande.prixcom, data.commande.datecom, id], (err, results)=>{
        if(err){
            result(err, null);
        }else{
            result(null, results); 
        };
    });
};

//Supprimer un seul commande par ID
export const deleteCommandeByID=(id, result)=>{
    db.query("DELETE FROM commande WHERE commande.idcom = ?", [id],(err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]); 
        };
    });
};
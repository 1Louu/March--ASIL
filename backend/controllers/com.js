// Import function from Commande model
import {
    getCommandes,
    getCommandeByID,
    insertCommande,
    updateCommande,
    deleteCommandeByID,
} from "../models/ComModel.js";

//get all commandes
export const showcommandes=(req, res)=>{
    getCommandes((err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//get single commande
export const showcommandeByID=(req, res)=>{
    getCommandeByID(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//create new commande
export const insertcommande=(req, res)=>{

    const data = req.body; 
    insertCommande(data, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//update commande
export const updatecommande=(req, res)=>{
    const data = req.body; 
    updateCommande( data,req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

//Delete commande
export const deletecommandeByID=(req, res)=>{
    deleteCommandeByID(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
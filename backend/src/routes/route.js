// Import express
import express from "express";

// import general
import {
    showProduits,
    showProduitByID,
    insertProduit,
    updateProduit,
    deleteProduitByID,
} from "../controllers/produit.js";

// import general
import {
    showcommandes,
    showcommandeByID,
    insertcommande,
    updatecommande,
    deletecommandeByID,
} from "../controllers/com.js";

// Init express router
const router = express.Router(); 

// Get all product 
router.get("/commande", showcommandes);

// Get single product
router.get("/commande/:id", showcommandeByID);

// Create new product 
router.post("/commande", insertcommande);
    
// Update product
router.put("/commande/:id", updatecommande);

// Delete product
router.delete("/commande/:id", deletecommandeByID);


// Get all product 
router.get("/produit", showProduits);

// Get single product
router.get("/produit/:id", showProduitByID);

// Create new product 
router.post("/produit", insertProduit);
    
// Update product
router.put("/produit/:id", updateProduit);

// Delete product
router.delete("/produit/:id", deleteProduitByID);

// Export default router
export default router; 
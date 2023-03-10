# Marché ASIL

## Contexte

Ce projet est destiné à l'association ASIL afin de les fournir une plateforme qui les leurs permettront d'affectuer les produits, ingrédients afin de déterminer les coûts, les gains et les pertes.

Développé par Luc BOUVARD.

## Cible du projet

Elle est destinée uniquement qu'au membre de l'association afin de faciliter la gestion de compte de leurs association.

## Composition du projet

Nous utilisont la base de donnée MySQL pour raison qu'elle répondent complètement aux besoin de ce projet.

#### FrontEnd : 

Ce projet utilise Vue.JS ainsi que Vuetify et Axios pour le frontEnd par mon propre choix.

#### Backend : 

Ce projet utilise NodeJS, mysql2, Nodemon, Express et Cors pour compléter la communication entre la base de donnée et l'application.

Ce qui fait effectivement ce projet d'une structure de Fullstack. 

## Arborescence du site

- **[ / ]** Page d'accueil qui démontre une table des produits en stock proposées avec des boutons Ajouter. Elle démontre également une autre colonne qui présentes les produits ajoutés, l'utilisateur aura ensuite la possibilité de "payer" ou "d'annuler" les produits selectionné. 
- **[ /gestion-inventaire ]** Page permettant d'apporter des modifications à les produits importé, d'ajouter les ingrédients nécessaire pour un produit désigné et détermine les comptes, les achats effectués et les importations.

##### *Page secondaire ( Basse priorité ) :*

- **[ /connexion ]** Page de connexion qui sera la page primaire pour ceux qui ne sont pas connecté.
- **[ /cree ]** Page de création de compte, l'utilisateur pourra entrer leurs identifiants, une fois crée, l'utilisateur devra attendre la vérification de la part d'un administrateur pour garantir les permission de voyager les pages.
- **[ /admin ]** Page d'administrateur, l'administrateur pourra regarder les comptes qui sont enregistré dans la base de donnée et de les apporter des modifications.

## Fonctionnalité attendues 

L'application devra : 

- Communiquer avec la base de données afin de stocker les données des produits.
- Présenter les produits et de les sélectionner.
- Apporter des modifications à ces produits. 
- Créer une historique d'achats et de ventes.
- Effectuer les analyses et calculs nécéssaire pour déterminer les gains et pertes. 

##### *Fonctionnalité Optionel ( Basse priorité ) :*

- Gestion de compte. 
- Gérer les permissions dans cette application.
- Informer l'utilisateur que le même nom de produit a été utilisée

## Licence 

licence par défaut, pour de détail, lire ici : https://docs.github.com/fr/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
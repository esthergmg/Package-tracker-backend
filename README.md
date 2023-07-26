# Backend Web Tracker

Ce projet contient le backend de l'application "Web Tracker", qui est un système de suivi de colis en ligne. Le backend est développé en utilisant Node.js, Express.js et MongoDB.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2. Clonez ce dépôt vers votre ordinateur.

3. Accédez au répertoire du backend via une invite de commande "cmd ou git bash".

4. Installez les dépendances nécessaires en exécutant la commande suivante :

npm install

5. Démarrer le serveur backend en exécutant la commande suivante :

npm run dev


Cela démarrera le backend sur le port spécifié dans le fichier .env, par exemple 3030. Le backend sera prêt à écouter les requêtes HTTP des clients frontends et à y répondre avec les données appropriées.

## Routes API

Le backend fournit les routes API suivantes pour l'application "Web Tracker":

- GET /: Route d'accueil pour le serveur backend.
- GET /api/package: Récupère la liste de tous les colis enregistrés.
- POST /api/package: Crée un nouveau colis.
- GET /api/package/:id: Récupère les détails d'un colis spécifique en utilisant son identifiant.
- PUT /api/package/:id: Met à jour les détails d'un colis spécifique en utilisant son identifiant.
- DELETE /api/package/:id: Supprime un colis spécifique en utilisant son identifiant.
- GET /api/delivery/:id: Récupère les détails de livraison d'un colis spécifique en utilisant son identifiant.
- GET /api/delivery/: Récupère les détails de livraison.
- PUT /api/delivery/:id: Modifier les détails de livraison d'un colis spécifique en utilisant son identifiant.
- POST /api/delivery/: création d'un deliverry.

6- le socket se retrouve sur le port : 3000
## Auteur

Ce projet a été développé par Esther GOHOUN.
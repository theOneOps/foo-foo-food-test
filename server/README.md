
### Structure du projet 

Voici un aperçu de la structure du projet et des dossiers principaux : 
- **/controllers** : Contient les contrôleurs qui gèrent la logique des requêtes HTTP (les fonctions à appeler pour chacune des routes de l'API).
- **/models** : Contient les schémas Mongoose pour les collections MongoDB.
- **/routes** : Contient les fichiers qui définissent les routes de l'API.
- **/middlewares** : Contient des middlewares comme l'authentification, la validation des données, etc. (à implémenter plus tard).
- **/config** : Contient la configuration de base, comme la connexion à la base de données. 
- **/services** : Contient la logique métier. Par exemple, les interactions avec la base de données (à définir plus tard).
- **/utils** : Contient des utilitaires généraux comme la population de la base de données.
### Dépendances installées

Dans le fichier `package.json`, sous la section `dependencies`, vous trouverez les éléments suivants :

- **dotenv** : Une bibliothèque pour charger les variables d'environnement depuis un fichier `.env` dans `process.env`. Elle est utilisée pour gérer les configurations sensibles comme les informations de connexion à la base de données sans les inclure directement dans le code source.

- **express** : Un framework web pour Node.js qui facilite la gestion des routes, des requêtes HTTP et des middlewares. C'est le cœur du serveur web qui gère les interactions entre le client et le serveur.

- **mongodb** : Le pilote officiel MongoDB pour Node.js. Il permet de se connecter à une base de données MongoDB et de manipuler les données stockées.

- **mongoose** : Une bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js. Elle fournit une interface de haut niveau pour travailler avec les données MongoDB et facilite la définition de modèles de données et la validation des données.

- **nodemon** : Un outil de développement qui surveille les fichiers de votre projet et redémarre automatiquement le serveur lorsque des modifications sont détectées. Cela simplifie le développement en évitant de devoir redémarrer manuellement le serveur.

### Lancer le serveur

Pour lancer le serveur, suivez ces étapes :

1. **Installer les dépendances** :
   Ouvrez un terminal et exécutez la commande suivante pour installer toutes les dépendances définies dans le fichier `package.json` :
   
```bash
   npm install
   ````
   
Pour lancer le serveur, il faut faire comme suit:
- ==npm i== (pour installer les dépendances)
- ==npm run server== (et si tout est bon, normalement, vous devrier voir dans la console :
	- "mongodb connected"
	- "Serveur en écoute sur le port 3000")
Et ensuite, avec un logciel comme Postman, vous pourrez tester l'API "http://localhost:3000/api/users", comme suit:
_ le $get$ vous renvoie tous les users de la base de données
_le $post$ avec un body comme suit : 

```
{
"name":"johnDoe",
"email":"johndoe@gmail.com"
}
```

*crée un user avec ces propriétés dans la base de données.*

> [!important] Pour plus d'informations sur les routes, vous pouvez consulter le fichier `userRoute` situé dans le dossier `routes`. Ce fichier contient les définitions des routes supplémentaires utilisées par l'application.

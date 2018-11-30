// importation de la librairie request
// recherche par défaut dans le répertoire node_modules

let request = require('request')

// Envoie de la requête http

request('https://jsonplaceholder.typicode.com/posts', 

// options 
{ json: true }, 

// une fonction callback

(err, res, body)  =>{

    console.log("b");
    
 //if (err) { return console.log('Erreur', err); }

 body.forEach(function (el ){

   // console.log(el.name);
 })
// body contient les données récupérées
    
});

console.log("c");
// tableau qui contiendra toutes les sessions du BreizhCamp

    //var nbElements = 12;
    //callBack(nbElements);

    /*var nbresultat = 0;
   function notiResultat (){
   nbResultat++;
   if ( nbResultat ==20 ){
   callback(talks.length)
   }
   }
     */

    

    var talks = [];

    exports.init = function (callback) {

    var request = require("request");

    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, tabtalks1) {

        talks = talks.concat(tabtalks1);

        

        // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp


        request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, tabtalks2) {

            talks = talks.concat(tabtalks2);

            callback(talks.length);
        
      // TODO     => une fois les données récupérées, alimenter la variable talks



    // TODO         => invoquer la callback avec le nombre de sessions récupérées *



        })

    }) 
}

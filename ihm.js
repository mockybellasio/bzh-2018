var service = require('./service');
var readline = require('readline');

exports.start = function () {
    service.init(function(nb){
        console.log(nb+"initialisation")
        
    })
        
                
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        var menuText = `
1 - rafraichir les données
2 - liste des sessions
3 - quitter        
        `
        
        rl.question(menuText, function(menu) {
            console.log(`afficher le menu  : ${menu}`);
        
            switch (menu) {
                case '1':
                service.init = function(callback){
        
                }
                    console.log("rafraichir les données"+ nb );
         break;
                case '2':
                
                service.listerSessions = function (callback) {
                }
                    console.log("lister les sessions" );
                  break;

                case '99':
        
                    console.log("quitter la session" );
                    break;
        
            rl.close();  // attention, une fois l'interface fermée, la saisie n'est plus possible
        
        };
             })



}


    
        
 
    

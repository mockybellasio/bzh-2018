let Service = require('./service');
let readline = require('readline');

const service = new Service()

exports.start = function () {

    service.init()
        .then(nb =>   console.log(nb+"initialisation"))
    
    /*    service.init(function(nb){
        console.log(nb+"initialisation")
        
    })*/
    
                
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        let  menuText =
         `
1 - rafraichir les données
2 - liste des sessions
3-lister les présentateurs

99 - quitter la session        
        `
        
        rl.question(menuText, function(menu) {
            console.log(`afficher le menu  : ${menu}`);
        
            switch (menu) {
                case '1':
                service.init()
                .then(nb =>   console.log("rafraichir les données"+ nb ))
                    ;
         break;
                case '2':
                
                service.listerSessions()
                    .then(listeSessions => {
                        listeSessions.forEach(uneSession => {
                            console.log(uneSession.name)
                        })
                    })

                /*    
                service.listerSessions = function (callback) {
                }*/
                    console.log(`lister les sessions` );
                  break;

                  case `3`:

                //  let request = require('request-promise-native');

      request('https://2018.breizhcamp.org/conference/speakers/', {}, (err, body) => {
    if (err) { return console.log('Erreur', err); }

    console.log(body);
});

                case '99':

                //service.init().then(nb => console.log("quitter la session"+ nb))

                console.log("quitter la session" );

                    break;
        
            rl.close();  // attention, une fois l'interface fermée, la saisie n'est plus possible
        
        };
             })

}


    
        
 
    

// tableau qui contiendra toutes les sessions du BreizhCamp
let request = require("request-promise-native");

module.exports = class Service {

    constructor(){
        this.talks =  []
    }

    init() {
        return Promise.all(

            ['http://2018.breizhcamp.org/json/talks.json',
    
            'http://2018.breizhcamp.org/json/others.json']
    
            .map(url => request(url, {json:true})))

             // [resultat1, resultat2]
             
            .then( (tabtalks) =>  {
                this.talks = tabtalks[0].concat(tabtalks[1])
                return this.talks.length
            })
    }

    listerSessions() {
        return Promise.resolve(this.talks)
    }


}


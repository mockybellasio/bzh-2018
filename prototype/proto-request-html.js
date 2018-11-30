let request = require('request-promise-native');

request(`http://www.breizhcamp.org/conference/speakers/`, {}, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    console.log(body);
});
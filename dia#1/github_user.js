/**
 * Created by emerson on 02/04/17.
 *
 * Uso da biblioteca http/https do Node.js
 *
 * Consumir API do Github
 */

var https = require('https');

var userName = 'mensonones';

var options = {

    host :"api.github.com",
    path : '/users/'+userName,
    method : 'GET',
    headers: {'user-agent': 'node.js'} //essa linha evita erro de requisição
};

var request = https.request(options, function (res) {

   var body = '';

   console.log('Response: ' + res.statusCode);
   console.log('---------------------------');

   res.on('data', function(chunk) {
        body+=chunk;
    });

   res.on('end', function () {

      var json = JSON.parse(body);

      console.log("Nome: " + json.name);
      console.log("Companhia: " + json.company);
      console.log("Número de seguidores: " + json.followers);
      console.log("Número de Respositórios: " + json.public_repos);
      console.log('---------------------------');

   });

    res.on('error', function(e) {
        console.error('o error é '+e);
    });

}).end();

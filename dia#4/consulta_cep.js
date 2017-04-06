/**
 * Created by emerson on 05/04/17.
 *
 * Uso da biblioteca http/https do Node.js
 *
 * Consumir API: http://correiosapi.apphb.com
 */


var http = require('http');

var cep = '76873274';


http.get('http://correiosapi.apphb.com/cep/' + cep, function (res) {

    var body = '';

    console.log('Response: ' + res.statusCode);
    console.log('---------------------------');

    res.on('data', function(chunk) {
        body+=chunk;
    });

    res.on('end', function (){

        var json = JSON.parse(body);

        console.log('CEP: ' + json.cep);
        console.log('Tipo logradouro: ' + json.tipoDeLogradouro);
        console.log('Logradouro: ' + json.logradouro)
        console.log('Bairro: ' + json.bairro);
        console.log('Cidade ' +json.cidade);
        console.log('Estado: ' +json.estado);

    });

    res.on('error', function(e) {
        console.error('o error é '+e);
    });

}).end();


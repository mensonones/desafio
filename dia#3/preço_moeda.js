/**
 * Created by emerson on 04/04/17.
 *
 * Uso da biblioteca http/https do Node.js
 *
 * Consumir API: http://api.fixer.io
 */

var http = require('http');


http.get('http://api.fixer.io/latest?symbols=USD,BRL', function (res) {

    var body = '';

    console.log('Response: ' + res.statusCode);
    console.log('---------------------------');

    res.on('data', function(chunk) {
        body+=chunk;
    });

    res.on('end', function (){

        var json = JSON.parse(body);

        console.log('Preço do EURO em REAL e DÓLAR');
        console.log('Data: ' + json.date);
        console.log('------------------------------');
        console.log('REAL: ' + json.rates.BRL);
        console.log('DÓLAR: ' + json.rates.USD);

    });

    res.on('error', function(e) {
        console.error('o error é '+e);
    });

}).end();


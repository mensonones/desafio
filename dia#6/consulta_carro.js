/**
 * Created by emerson on 07/04/17.
 * Uso da biblioteca http/https do Node.js
 *
 * Consumir API: http://fipeapi.appspot.com/api
 */

var http = require('http');

http.get('http://fipeapi.appspot.com/api/1/carros/veiculo/21/4828/2013-1.json', function (res) {
    var body = '';

    console.log('Response: ' + res.statusCode);
    console.log('----------------------------');

    res.on('data', function (chunk) {
        body+=chunk;
    });

    res.on('end', function () {
        var json = body;

        console.log(json);
    });

    res.on('err', function (e) {
        console.log('O erro é: ' + e);
    });

}).end();


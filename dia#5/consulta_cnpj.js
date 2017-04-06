/**
 * Created by emerson on 06/04/17.
 *
 * Uso da biblioteca http/https do Node.js
 *
 * Consumir API: https://www.receitaws.com.br/v1/cnpj/
 */

var https = require('https');

var cnpj = '07272636000131';

https.get('https://www.receitaws.com.br/v1/cnpj/' + cnpj, function (res) {
    var body = '';

    console.log('Resposta: ' + res.statusCode);
    console.log('----------------------------');

    res.on('data', function (chunk) {
        body+=chunk;
    });

    res.on('end', function () {
        var json = JSON.parse(body);

        console.log('Nome: ' + json.nome);
        console.log('CNPJ: ' + json.cnpj);
        console.log('UF: ' + json.uf);
        console.log('Situação: ' + json.situacao);
        console.log('Fantasia: ' + json.fantasia);
        console.log('Município: ' + json.municipio);
        console.log('Abertura: ' + json.abertura);
        console.log('Status: ' + json.status);
    });

    res.on('err', function (e) {
        console.log('O erro é: ' + e);
    });

}).end();

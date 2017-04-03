/**
 * Created by 04144648346 on 03/04/17.
 *
 *  * Uso da biblioteca http/https do Node.js
 *
 *    Consumir API: Dados abertos educação
 */

var http = require('http');

http.get('http://educacao.dadosabertosbr.com/api/escola/23236159', function(res){
    var body = '';

    console.log(res.statusCode);

    res.on('data', function(chunk){
        body+=chunk;
    });

    res.on('end', function(){
        var json = JSON.parse(body);
        console.log('Nome: ' + json.nome);
        console.log('UF: ' + json.siglaUf);
        console.log('Região: ' + json.regiao);
        console.log('Salas Existentes: ' + json.salasExistentes);
        console.log('Qntd. de Computadores: ' + json.computadores);
        console.log('Qntd. de Funcionários: ' + json.funcionarios);
        console.log('Situação: ' + json.situacaoFuncionamentoTxt);
    });

    res.on('error', function(e){
        console.log('O erro é: ' + e);
    });

}).end();
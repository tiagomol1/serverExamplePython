const express = require('express');
const packs = require('./packages');
const routes = express.Router();

//ENVIA
routes.post('/pacotes', (request, response) => {
  const { description, status, startDate, finishDate } = request.body;

  if( description == undefined || status == undefined || startDate == undefined || finishDate == undefined ){
    return response.json({
      status: 400,
      error: "Erro ao inserir Dados"
    })
  }else{
    packs.push({
        code: packs.length + 1,
        description: description,
        status: status,
        startDate: startDate,
        finishDate: finishDate
    });
    return response.json({
      status: 200,
      response: "Dados inseridos com Sucesso",
      data: {
        code: packs.length,
        description: description,
        status: status,
        startDate: startDate,
        finishDate: finishDate
      }
    });
  }
});


//CONSULTA
routes.get('/pacotes/:code', (request, response) => {
  const code = request.params.code;

  if(code == undefined || code == null || code == ""){
    return response.status(400).json({
      status: 400,
      error: "Erro ao procurar pacote"
    });
  }else{
    if(packs[code - 1] == undefined){
      return response.status(404).json({
        error: `Pacote não encontrado.`
      });
    }
    return response.json(packs[code - 1]);
  }
  
});


//DELETA
routes.delete('/pacotes/:code', (request, response) => {
  const code = request.params.code;

  if(code == undefined || code == null || code == "" || packs[code - 1] == undefined){
    return response.status(400).json({
      status: 400,
      response: "Pacote não encontrado ou não informado."
    });
  }

  packs[code - 1] = { info: "Pacote Excluído."};

  return response.json({
    status: 200,
    response: "Pacote excluído com Sucesso."
  })

});


//ALTERA
routes.put('/pacotes/:code', (request, response) => {
  const code = request.params.code;
  const { description, status, startDate, finishDate } = request.body;

  if(code == undefined || code == null || code == "" || packs[code - 1] == undefined){
    return response.status(400).json({
      status: 400,
      response: "Pacote não encontrado ou não informado."
    });
  }else{
    if(description == undefined && status == undefined && startDate == undefined && finishDate == undefined){
      return response.status(400).json({
        status: 400,
        response: "Nada foi alterado na requição.."
      });
    }

    if(description != undefined && description != ""){
      packs[code - 1].description = description;
    } 
    if(status != undefined && status != ""){
      packs[code - 1].status = status;
    }
    if(startDate != undefined && startDate != ""){
      packs[code - 1].startDate = startDate;
    }
    if(finishDate != undefined && finishDate != ""){
      packs[code - 1].finishDate = finishDate;
    }

    return response.json({
      status: 200,
      response: "Dados alterados com Sucesso",
      data: {
        code: packs.length,
        description: description,
        status: status,
        startDate: startDate,
        finishDate: finishDate
      }
    });

  }
});

//CONSULTA TODOS

//CONSULTA
routes.get('/todosPacotes', (request, response) => {
  return response.json({
    status: 200,
    packages:  packs
  }); 
});



module.exports = routes;
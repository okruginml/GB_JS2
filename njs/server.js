'use strict';

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express(),

    chess = require('./chess.json'),
    phones = require('./phones.json');


app.get('/', cors(), function(req, res){
  var key = req.query.param;
  if (key == "") {
    res.json(phones);
  }
  if (key == "chess") {
    res.json(chess);
  }
  else {
   res.json({
      "Вы ввели ": key
    });
  };
});



if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
/*text: 'Hello ' + key + '!'*/
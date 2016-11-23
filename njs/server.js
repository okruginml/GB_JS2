'use strict';

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express();


app.get('/', cors(), function(req, res){
  var tessst = req.query.name;
  if (tessst == "") {
    res.json({
      "Lenovo": {
      "model": "A820",
      "price": 8300
    },

    "BQ": {
      "model": "S36",
      "price": 3700
    },

    "DooGee": {
      "model": "D700",
      "price": 5400
    },

    "Samsung": {
      "model": "Note5",
      "price": 26000
    },

    "Huawei": {
      "model": "H250",
      "price": 6200
    },

    "Apple": {
      "model": "iPhone 6s",
      "price": 34000
    }
    });
  }
  else {
   res.json({
      "Вы ввели ": tessst
    });
  };
});



if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
/*text: 'Hello ' + tessst + '!'*/
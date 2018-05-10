var votes = require ('./votes');
    express = require('express'),
    app = express();

    var v1 = new votes("shimon");
    var v2 = new votes("haim");
    var v3 = new votes("dan");

     v1.ADD();
     v1.ADD();
     v1.getData();


    app.listen(8080);
    app.get('/',(req, res)=>{
        res.send(out);
    });


const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    require('./src/models/Product');

//primeira rota 
app.get('/', (req, res)=>{
    res.send('Hello World! Felipe Moreira')
})

app.listen(3001);
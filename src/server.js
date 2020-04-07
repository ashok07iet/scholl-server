const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const winston = require('winston');
const app = express();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const basicAuth=require('./util/basic_auth');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
winston.add(new winston.transports.File({
    filename: 'combined.log',
    level: 'info'
}));
winston.add(new winston.transports.File({
    filename: 'error.log',
    level: 'error'
}));
winston.add(new winston.transports.Console({
    level: 'silly'
}));
const winstonStream = {
    write: (text) => {
        winston.info(text);
    }
}
mongoose.connect("mongodb://localhost:27017/school_db", { poolSize: 4, keepAlive: true, keepAliveInitialDelay: 300000, useNewUrlParser: true },(error)=>{
    
      winston.error(error) ;
    
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny', { stream: winstonStream }));
app.use(basicAuth);
app.get('/', function (req, res) {
    res.send("hello world");
});
app.use('/students', router);
app.listen(8080,function () {
    winston.info('Express started on port 8080');
});

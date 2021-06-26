var express = require('express');
var swaggerUI = require('swagger-ui-express');
var path = require('path');
var YAML = require('yamljs');
var userRouter = require('./resources/users/user.router');
var boardsRouter = require('./resources/boards/boards.router');
var tasksRouter = require('./resources/tasks/tasks.router');
var app = express();
var swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', function (req, res, next) {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);
module.exports = app;

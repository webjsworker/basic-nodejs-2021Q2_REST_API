export {}
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router.ts');
const boardsRouter = require('./resources/boards/boards.router.ts');
const tasksRouter = require('./resources/tasks/tasks.router.ts');

const request = express.Request
const response = express.Response
const nextFunction = express.NextFunction

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: typeof request, res: typeof response, next: typeof nextFunction) => {
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

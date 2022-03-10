const express = require('express');
const constants = require('./src/config/constants');

const { initCors, initBodyParser } = require('./src/middlewares/expressSetup');
const { initLogger } = require('./src/middlewares/logger');
const { createSudoku } = require('./src/routes/sudokuGen');

const app = express(); 

initCors(app);
initBodyParser(app);
initLogger(app);
createSudoku(app);

app.get('/ping',(req,res) => {
    res.json({'message':'pong'});
})

app.listen(constants.APPLICATION_PORT, () => console.log(`Sudoku Generator | Listening on port ${constants.APPLICATION_PORT}!`))


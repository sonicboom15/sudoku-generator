const constants = require('../config/constants');

const { createSudokuObject } = require('../services/sudokuMaker');

const createSudoku = (app) => {
    app.get('/createSudoku', async (req, res) => {
        if((!req.query.difficulty)) {
            res.status(400).json({
                "error": "Please provide a difficulty level"
            });
        }
        else{
            if(!(constants.DIFFICUILTY_LEVELS.includes(req.query.difficulty))) {
                res.status(400).json({
                    "error": "Please provide a valid difficulty level"
                });
            }
            else{
                difficulty = req.query.difficulty;
                let response = await createSudokuObject(difficulty, constants.DIFFICUILTY[difficulty]);
                res.json(response);
            }
        }  
    })
}

module.exports = {
    createSudoku
}
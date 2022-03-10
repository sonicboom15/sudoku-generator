const sudoku = require('sudokutoolcollection')();

const createSudokuObject = (difficulty, size) => {
    let response = {
        'difficulty': difficulty,
        'status': 'ok',
    };

    //Create Sudoku
    let questionString = sudoku.generator.generate(size)
    let question = sudoku.conversions.stringToGrid(questionString);
    response.question = question;

    //Create Answer
    let answerString = sudoku.solver.solve(questionString);
    let answer = sudoku.conversions.stringToGrid(answerString);
    response.answer = answer;

    return response;
}

module.exports = {
    createSudokuObject
}
const bodyParser = require('body-parser');
const cors = require('cors');

const initCors = (app) => {
    app.use(cors());
} 

const initBodyParser = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

module.exports = {
    initCors,
    initBodyParser
}
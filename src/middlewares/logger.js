const morgan = require('morgan');
const ruid = require('express-ruid');

const initLogger = (app) => {
    app.use(ruid());
    morgan.token('id', (req) => req.rid.split('-')[1]);
    app.use(morgan("[:date[iso] #:id] Started :method :url for :remote-addr", { immediate: true }));
    app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms"));
}

module.exports = {
    initLogger
}
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use('/', indexRouter);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on port ' + server.address().port);
})
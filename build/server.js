var PORT = require('./common/config').PORT;
var app = require('./app');
app.listen(PORT, function () {
    return console.log("App is running on http://localhost:" + PORT);
});

const response = require("express");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// request('Запрос'), response('Ответ')
app.get("/", function(request, response) {
    response.sendFile(__dirname + '\\index.html');
});

// after submit btn, get fields content
app.post("/", function(request, response) {
    // console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    response.send(`${num1} + ${num2} = ${result}`);
});

// wait request
app.listen(3000, function() {
    console.log('Server is running on Port 3000');
});
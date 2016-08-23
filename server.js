var http = require('http');

function handler(request, response){
    response.end("{'message':'Goodbye and see you next time!'}");
}

http.createServer(handler).listen(8080, function(){
    console.log("Service is running...");
});

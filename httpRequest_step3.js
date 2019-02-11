// while https is built-in to Node, it is a module, so it must be required
var https = require('https');   

//  STEP 2
function getAndPrintHTML (options) {
    https.get(options, function (response) {
        
        var buffer = '';
        response.setEncoding('utf8');
        
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            buffer += data;
        });
        
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
            console.log(buffer + '/n');
            console.log('Response stream complete.');
        });
    });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

console.log(getAndPrintHTML(requestOptions));
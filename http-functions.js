var https = require('https'); 

module.exports = function getHTML (options, callback) {
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
            callback(buffer);
            console.log('Response stream complete.');
        });
    });
  }
  

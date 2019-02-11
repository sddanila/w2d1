// while https is built-in to Node, it is a module, so it must be required
var https = require('https');   

//  STEP 2
function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    https.get(requestOptions, function (response) {

        var buffer = '';
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            buffer += data;
            // console.log('7777777777777777777777');
            // console.log(data);
            // console.log('Chunk Received. Length:', data.length);
        });
        
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
            console.log(buffer + '/n');
          console.log('Response stream complete.');
        });
    });
  }

console.log(getAndPrintHTML());
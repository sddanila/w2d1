// while https is built-in to Node, it is a module, so it must be required
var https = require('https');   

//  STEP 4
function getHTML (options, callback) {
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
            printHTML(buffer);
            console.log('Response stream complete.');
        });
    });
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

console.log(getHTML(requestOptions, printHTML));
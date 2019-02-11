// while https is built-in to Node, it is a module, so it must be required

var getHTML = require('./http-functions');  
// var printHTML = require('./http-functions');  

//  STEP 5

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function printHTML (html) {
    console.log(html);
  }

console.log(getHTML(requestOptions, printHTML));
var getHTML = require('../http-functions'); 

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function printHTML (html) {
    console.log(html.toUpperCase());
  }

console.log(getHTML(requestOptions, printHTML));
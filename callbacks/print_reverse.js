var getHTML = require('../http-functions');  


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
    var splitHTML = html.split('');
    var reverseArray = splitHTML.reverse();
    console.log(reverseArray.join(''));
  }

// console.log(getHTML(requestOptions, printHTML));

getHTML(requestOptions, printHTML)
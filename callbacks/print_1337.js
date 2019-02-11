var getHTML = require('../http-functions');  

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
};

function printHTML (html) {
    var output = "";
for (var i=0; i <html.length; i++) {
  switch (html[i]) {
    case "a":
      output += "4";
      break;
    case "e":
      output += "3";
      break;
    case "o":
      output += "0";
      break;
    case "l":
      output += "1";
      break;
    case "s":
      output += "5";
      break;
    case "t":
      output += "7";
      break;
    default:
      output += html[i];
      break;
  }
}
console.log(output);
}

// console.log(getHTML(requestOptions, printHTML));

getHTML(requestOptions, printHTML)




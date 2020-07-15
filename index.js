// Import stylesheets
import './style.css';
import 'xmlbuilder2'

var obj = { newData:{
'-number': [ 
    "one", 
    "two"
  ]
}
}

var builder = require('xmlbuilder2');
var root = builder.create({invalidCharReplacement: ''},obj);
var xml = root.end({ prettyPrint: true});
console.log(xml);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<textarea>${xml}</<textarea>`;
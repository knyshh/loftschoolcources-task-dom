var app = require("./modules/deleteTextNodes");
var app2 = require("./modules/prepend.js");

var list = document.getElementById('list');
app.deleteTextNodes(list);

var container = document.getElementById('ulPrepend');
var newEl = document.createElement('li');
newEl.innerHTML = "000insertBefore"
app2.prepend(container,newEl);
/*! writingTestsYo v0.0.0 - MIT license */
'use strict';


//Reverse the provided string.
var app = {};
app.reverseString = function (str) {
  // your code goes here
  return str.trim().split("").reverse().join("");
}

//Factorialize a Number
  //#1 recursion
app.factorialize = function (num) {
    if(num < 0) { return -1; }
    else if(num === 0) { return 1; }  //+always use triple equal with 0 -mem
    else { return num * (app.factorialize(num -1)); }
  }






























if ( typeof module !== "undefined" ) {
  module.exports = app;
}
var path = require('path');
var expect = require('chai').expect;

var app = require(path.join(__dirname, '..', './writingTestsYo.js'));

describe('Reverse a string', function () {
  'use strict';

  // Add assertions here

  it('is a function', function () {
    expect(app.reverseString).to.be.a('function');

  });

  it('reverses a string', function () {
    var result = app.reverseString('hello');
    expect(result).to.equal('olleh');
  });

  it('reverses a string', function () {
    var result = app.reverseString('Greetings from Earth');
    expect(result).to.equal('htraE morf sgniteerG');
  });
});


describe('Factorialize a Number', function () {
  'use strict';

  // Add assertions here

  it('is a function', function () {
    expect(app.factorialize).to.be.a('function');
  });

  it('returns -1 if number < 0', function () {
    var result = app.factorialize(-1);
    expect(result).to.equal(-1);
  });   
  it('returns the proper factorial', function () {
    var result = app.factorialize(5);
    expect(result).to.equal(120);
  });  
  
  it('returns the proper factorial', function () {
    var result = app.factorialize(10);
    expect(result).to.equal(3628800);
  });  

  it('returns the proper factorial', function () {
    var result = app.factorialize(0);
    expect(result).to.equal(1);
  });

});
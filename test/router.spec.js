var chai = require('chai');
var router = require('../src/js/router')
var chaiExpect = chai.expect();
chai.should();

var router = new router();
describe("Router Test Suite", function() {
   beforeEach(function() {

   	  

    });
   afterEach(function() { });

   it('should fail', function() { 
   	 expect(router).to.be.an('object'); 
   });

});
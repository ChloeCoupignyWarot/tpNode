/**
 * ExampleController
 *
 * @description :: Server-side logic for managing Examples
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function(req, res){
	  return res.view('test');hh
	},
	uneautre: function(req, res){
  	  return res.view('homepage');
  	},

};



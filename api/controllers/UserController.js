/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
var multer  = require('multer')

module.exports = {
    moncompte: function(req, res) {
      if(req.user){
              var data = {};
              data.mesdata = {title: "titre", content: "content"};


        User.findOne({id:req.user.id}).populate('addresses').exec(function(err, user){
        console.log(user);
        data.user = user;
         return  res.view('moncompte', data);
        })

      }
      else{
        res.redirect('/login');
      }
    },
    avatar: function(req, res) {
    console.log(req.body);
    console.log(req.files);

    //return res.status( 200 ).send( req.file );
       return res.json({"result":"ok"});
    }
};


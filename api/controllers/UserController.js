/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
var multer  = require('multer');

module.exports = {

    test: function(req, res){
        var where = {id:req.user.id};

        User
          .findOne(where)
          .populate('addresses')
          .exec(function(err, user){
            return res.json(user);
          });
      },

    moncompte: function(req, res) {
      if(req.user){
              var data = {};
              data.mesdata = {title: "titre", content: "content"};


        User.findOne({id:req.user.id}).populate('addresses').exec(function(err, user){
        //console.log(user);
        data.user = user;
         return  res.view('moncompte', data);
        })

      }
      else{
        res.redirect('/login');
      }
    },
    avatar: function(req, res) {
      req.file('avatar').upload({
        dirname: path.resolve(sails.config.appPath, 'assets/images/avatars')
      },function (err, uploadedFiles) {
        if (err) return res.negotiate(err);
        //console.log(uploadedFiles[0]);
        User.update({id:req.user.id},{avatar:path.basename(uploadedFiles[0].fd)}).exec(function(err, user){
          if(req.user){
                        var data = {};


                  User.findOne({id:req.user.id}).populate('addresses').exec(function(err, user){
                  //console.log(user);
                  data.user = user;
                   return  res.view('moncompte', data);
                  })

                }
                else{
                  res.redirect('/login');
                }
                })


      })},
};


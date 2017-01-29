/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
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
    }
};


/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    moncompte: function(req, res) {
            var data = {};
            data.mesdata = {title: "titre", content: "content"};
            data.user = req.user;
            return  res.view('moncompte', data);
        }
};


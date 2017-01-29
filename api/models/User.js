/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var bcrypt = require('bcryptjs');

module.exports = {

 attributes: {
         email: {
             type: 'email',
             required: true,
             unique: true
         },
         password: {
             type: 'string',
             minLength: 6,
             required: true
         },
         nom: {
                      type: 'string',
                      minLength: 6,
                      required: false
                  },
         prenom: {
                      type: 'string',
                      minLength: 6,
                      required: false
          },
         tel: {
                       type: 'string',
                       minLength: 6,
                       required: false
                   },
          addresses: {
                       collection: 'address',
                       type: 'string',
                       minLength: 6,
                       required: false,
                       via: 'owner'
                   },
         toJSON: function() {
             var obj = this.toObject();
             delete obj.password;
             return obj;
         }
     },
     beforeCreate: function(user, cb) {
     console.log('ok');
         bcrypt.genSalt(10, function(err, salt) {
             bcrypt.hash(user.password, salt, function(err, hash) {
                 if (err) {
                     console.log(err);
                     cb(err);
                 } else {
                     user.password = hash;
                     cb();
                 }
             });
         });
     }
};


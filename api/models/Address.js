/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var bcrypt = require('bcryptjs');

module.exports = {

 attributes: {
         ville: {
             type: 'string',
             required: true,
         },
         codePostal: {
             type: 'string',
             minLength: 4,
             required: true
         },
         rue: {
                      type: 'string',

                      required: true
                  },
         numero: {
                      type: 'string',
                      minLength: 1,
                      required: true
                  },
         owner: {
                 model: 'user'
         }

     },

};


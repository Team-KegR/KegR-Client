'use strict';

const app = require('../app-data');

const updateKeg1 = (success, failure, data, id) => {
  console.log(data, id);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/kegs/' + id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

const updateKeg2 = (success, failure, data, id) => {
  console.log(data);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/kegs/' + id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

const updateKeg3 = (success, failure, data, id) => {
  console.log(data);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/kegs/' + id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

const updateKeg4 = (success, failure, data, id) => {
  console.log(data);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/kegs/' + id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

const updateKeg5 = (success, failure, data, id) => {
  console.log(data);
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/kegs/' + id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };

    const kegKick = (success, failure, id) => {
      $.ajax({
        method: "PATCH",
        url: app.server.api + '/kegs/' + id,
        data: {
          'keg': {
            'kicked': 'true'
          }
        },
      })
      .done(success)
      .fail(failure);
      };

      const validate = (success, failure, id, validate) => {
        $.ajax({
          method: "PATCH",
          url: app.server.api + '/kegs/' + id,
          data: {
            'keg': {
              'validation': validate
            }
          },
        })
        .done(success)
        .fail(failure);
        };

        const getKegFailure = (error) => {
          console.error(error);
        };

        const getKegSuccess = (kegs) => {
          console.log('get keg success');
          console.log("you got kegs " + kegs);
          let kegDisplayTemplate = require('../templates/current-keg.handlebars');
          console.log("keg display", kegs);
          $('.content').html(kegDisplayTemplate({
            kegs : kegs.kegs
          }));
        };

        const getKegs = (success, failure) => {
          $.ajax({
            method: "GET",
            url: app.server.api + '/kegs/',
            dataType: 'JSON',
            headers: {
              Authorization: 'Token token='+ app.currentUser.token,
            },
          })
          .done(function(kegs){
            console.log(kegs);
            getKegSuccess(kegs);
          })
           .fail(failure);
          };

        const validateSuccess = () => {
          console.log('validate keg success');
          getKegs(getKegSuccess, getKegFailure);
        };

        const validateFailure = (error) => {
          console.error(error);
        };


module.exports = {
  updateKeg1,
  updateKeg2,
  updateKeg3,
  updateKeg4,
  updateKeg5,
  getKegs,
  kegKick,
  validate,
  validateFailure,
  validateSuccess
};

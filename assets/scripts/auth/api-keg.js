'use strict';

const app = require('../app-data');
const kegUi = require('./ui-keg');

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
      kegUi.getKegSuccess(kegs);
    })
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

      const validate = (success, failure, id) => {
        $.ajax({
          method: "PATCH",
          url: app.server.api + '/kegs/' + id,
          data: {
            'keg': {
              'validation': valid
            }
          },
        })
        .done(success)
        .fail(failure);
        };


module.exports = {
  updateKeg1,
  updateKeg2,
  updateKeg3,
  updateKeg4,
  updateKeg5,
  getKegs,
  kegKick
};

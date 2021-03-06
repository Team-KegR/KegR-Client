'use strict';

// const authUi = require('./ui-user');
// const app = require('../app-data');
// const authApi = require('./api-user');
const kegApi = require('./api-keg');
// const authApiNodes = require('./api-nodes'); Not being used ATM

const kegUi = require('./ui-keg');
const getFormFields = require('../../../lib/get-form-fields');


let kegId;

const kegEventHandlers = () => {

  // click event to open modal for editing keg
  $('.content').on('click', '.update-btn', function (event) {
    event.preventDefault();
    kegId = $(this).closest('.update-btn').attr('data-id');
    $('#edit-keg-modal').modal('show');
  });

  $('#edit-keg').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    $('.modal.in').modal('hide');
    kegApi.updateKeg(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('.content').on('click', '.validate-btn', function (event) {
    event.preventDefault();
    console.log("clicked kicked button");
    let kegId = $(this).closest('.validate-btn').attr('data-id');
    let validate = $(this).closest('.validate-btn').attr('data-attribute');
    validate++;
    console.log(validate);
    kegApi.validate(kegApi.validateSuccess, kegApi.validateFailure, kegId, validate);
  });

  $('.content').on('click', '.kicked-btn', function (event) {
    event.preventDefault();
    console.log("clicked kicked button");
    let kegId = $(this).closest('.kicked-btn').attr('data-attribute');
    kegApi.kegKick(kegUi.kegKickSuccess, kegUi.kegKickFailure, kegId);
  });



};


  module.exports = {
   kegEventHandlers,
  };

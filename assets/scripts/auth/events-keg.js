'use strict';

// const authUi = require('./ui-user');
// const app = require('../app-data');
// const authApi = require('./api-user');
const kegApi = require('./api-keg');
// const authApiNodes = require('./api-nodes'); Not being used ATM

const kegUi = require('./ui-keg');
const getFormFields = require('../../../lib/get-form-fields');




const kegEventHandlers = () => {

  // click event to open modal for editing keg
  $('.content').on('click', '.edit-keg-btn', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = $(this).closest('.edit-keg-btn').attr('data-id');
    kegApi.updateKeg1(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('#edit-keg').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = kegId;
    kegApi.updateKeg1(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
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



};


  module.exports = {
   kegEventHandlers,
  };

'use strict';

// const authUi = require('./ui-user');
// const app = require('../app-data');
// const authApi = require('./api-user');
const kegApi = require('./api-keg');
// const authApiNodes = require('./api-nodes'); Not being used ATM

const kegUi = require('./ui-keg');




const kegEventHandlers = () => {

  $('#edit-keg-1').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = 1;
    kegApi.updateKeg1(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('#edit-keg-2').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = 2;
    kegApi.updateKeg2(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('#edit-keg-3').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = 3;
    kegApi.updateKeg3(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('#edit-keg-4').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = 4;
    kegApi.updateKeg4(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('#edit-keg-5').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    let kegId = 5;
    kegApi.updateKeg5(kegUi.updateKegSuccess, kegUi.updateKegFailure, data, kegId);
  });

  $('.content').on('click', '.kicked-btn', function (event) {
    event.preventDefault();
    debugger;
    console.log("clicked kicked button");
    let kegId = $(this).closest('kicked-btn').attr('data-attribute');
    kegApi.kegKick(kegUi.kegKickSuccess, kegUi.kegKickFailure, kegId);
  });



};


  module.exports = {
   kegEventHandlers,
  };

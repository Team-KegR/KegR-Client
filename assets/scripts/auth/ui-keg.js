'use strict';

// const app = require('../app-data');
// const authApi = require('./api-user');
const kegApi = require('./api-keg');


const getKegFailure = (error) => {
  console.error(error);
};


const kegKickSuccess = (data) => {
  console.log("keg kicked " + data);
};

const kegKickFailure = (error) => {
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
  $('.kicked-btn').on('click', function (event) {
    event.preventDefault();
    console.log("clicked kicked button");
    let kegId = $(this).attr('data-attribute');
    kegApi.kegKick(kegKickSuccess, kegKickFailure, kegId);
  });
};

const updateKegSuccess = () => {
  console.log('update keg success');
};

const updateKegFailure = (error) => {
  console.error(error);
};



const kegKickSuccess = (data) => {
  console.log("keg kicked " + data);
};

const kegKickFailure = (error) => {
  console.error(error);
};


module.exports = {
  updateKegSuccess,
  updateKegFailure,
  getKegSuccess,
  getKegFailure,
  kegKickSuccess,
  kegKickFailure

};

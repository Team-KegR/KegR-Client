'use strict';

// const app = require('../app-data');
// const authApi = require('./api-user');


const getKegFailure = (error) => {
  console.error(error);
};

const getKegSuccess = (data) => {
  console.log('get keg success');
  console.log("you got kegs " + data.kegs);
  kegDisplay(data);
};

let kegDisplay = function(kegs){
  let kegDisplayTemplate = require('../templates/current-keg.handlebars');
  console.log("keg display", kegs);
  $('.content').html(kegDisplayTemplate({
    kegs : kegs.kegs
  }));
};


const updateKegSuccess = () => {
  console.log('update keg success');
  kegDisplay();
};

const updateKegFailure = (error) => {
  console.error(error);
};



const kegKickSuccess = (data) => {
  console.log("keg kicked " + data);
  kegDisplay(data);
};

const kegKickFailure = (error) => {
  console.error(error);
};


module.exports = {
  updateKegSuccess,
  updateKegFailure,
  kegDisplay,
  getKegSuccess,
  getKegFailure,
  kegKickSuccess,
  kegKickFailure

};

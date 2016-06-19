'use strict';

// const app = require('../app-data');
// const authApi = require('./api-user');
const kegApi = require('./api-keg');

const kegKickSuccess = (data) => {
  console.log("keg kicked " + data);
  kegApi.getKegs(kegApi.getKegSuccess, kegApi.getKegFailure);
};

const kegKickFailure = (error) => {
  console.error(error);
};


const updateKegSuccess = () => {
  console.log('update keg success');
  kegApi.getKegs(kegApi.getKegSuccess, kegApi.getKegFailure);
};

const updateKegFailure = (error) => {
  console.error(error);
};





module.exports = {
  updateKegSuccess,
  updateKegFailure,
  kegKickSuccess,
  kegKickFailure,
 };

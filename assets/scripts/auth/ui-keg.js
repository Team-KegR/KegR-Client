'use strict';

const app = require('../app-data');
const authApi = require('./api-user');

const updateKegSuccess = () => {
  console.log('update keg success');
};

const updateKegFailure = (error) => {
  console.error(error);
};


module.exports = {
  updateKegSuccess,
  updateKegFailure
};

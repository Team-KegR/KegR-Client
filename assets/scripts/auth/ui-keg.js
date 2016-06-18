'use strict';

const app = require('../app-data');
const authApi = require('./api-user');

const updateKegSuccess = () => {
  console.log('update keg success');
};

const updateKegFailure = (error) => {
  console.error(error);
};

//
let kegDisplay = function(kegs){
  let kegDisplayTemplate = require('../templates/current-keg.handlebars');
  console.log("keg display", kegs);
  $('.content').html(kegDisplayTemplate({
    kegs : kegs
  })
);
};


module.exports = {
  updateKegSuccess,
  updateKegFailure,
  kegDisplay
};

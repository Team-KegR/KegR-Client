'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
let userEvents = require('./auth/events-user.js');
let kegEvents = require('./auth/events-keg');
let kegApi = require('./auth/api-keg');
let kegUi = require('./auth/ui-keg');

$(() => {
  userEvents.userEventHandlers();
  kegEvents.kegEventHandlers();
  kegApi.getKegs(kegUi.getKegSuccess, kegUi.getKegFailure);
});

'use strict';

const server = {
  api: 'https://kegr.herokuapp.com',
  };

  let currentUser = {
    id: 0,
    token:''
  };

module.exports = {
  server,
  currentUser,
};

'use strict';

const server = {
  api: 'http://localhost:3000',
  };

  let currentUser = {
    id: 0,
    token:''
  };

module.exports = {
  server,
  currentUser,
};

'use strict';

const app = require('../app-data');
const authApi = require('./api-user');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user._id;
};

const signInFailure = (error) => {
  console.error(error);

};

const signUpSuccess = (data) => {
  console.log("Sign up successful");
  authApi.signIn(signInSuccess, signInFailure, app.server.signUpData);
};

const signUpFailure = (error) => {
  console.error(error);
};


const signOutSuccess = () => {
  app.currentUser.token = null;
  app.currentUser.id = null;
};

const changePwSuccess = (data) => {
  console.log("Password change successful!");
};

const changePwFailure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  changePwSuccess,
  changePwFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signInSuccess,
  signInFailure
};

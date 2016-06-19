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
  app.currentUser.id = data.user.id;
  console.log('sign in success');
  $('.content').removeClass('hidden');
  $('.navbar').removeClass('hidden');
  $('.modal.in').modal('hide');
  $('.landing-header').addClass('hidden');
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
  console.log('sign out success');
  $('.landing-header').removeClass('hidden');
  $('.modal.in').modal('hide');
  $('.content').addClass('hidden');
  $('.navbar').addClass('hidden');
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

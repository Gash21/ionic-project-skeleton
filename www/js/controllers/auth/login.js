angular.module('starter.auth.login', [])

.controller('AuthLoginCtrl', function(api) {
  var login = this;

  login.submitLogin = function(user){
    console.log(user);
    api.login.post(user).$promise.then(function(result){

    }, function(error){

    });
  };
});

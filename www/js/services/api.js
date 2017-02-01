angular.module('starter.services.api', ['starter.config'])

.factory('api', function($resource, $http, $localStorage) {
  return {
    login: $resource(appConfig.api_base_url + 'login/', {}, {
      'post': {
        method: 'POST',
        isArray: false
      }
    }),
  };
});

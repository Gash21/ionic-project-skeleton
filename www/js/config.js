angular.module('starter.config', [])
.constant('APP_CONFIG', {
    version: '2.0.1',
    mode: 'release'
})

.constant('DB_CONFIG', {
    name: 'table_name',
    version: '1.7',
    tables: [
        {
          name: 'tblservices',
          columns: [
              {name: 'id', type: 'integer'},
              {name: 'subserviceId', type: 'integer primary key'},
              {name: 'subserviceName', type: 'text'},
              {name: 'subserviceNameInd', type: 'text'},
              {name: 'service_images', type: 'text'},
              {name: 'isTopService', type: 'text'},
              {name: 'categoryName', type: 'text'},
              {name: 'categoryHeading', type: 'text'},
              {name: 'categoryId', type: 'integer'},
              {name: 'createdDate', type: 'text'},
              {name: 'counter', type: 'int'}
          ]
        },
        {
          name: 'tblsynctimes',
          columns: [
              {name: 'tableName', type: 'text primary key'},
              {name: 'lastSync', type: 'text'}
          ]
        }
    ]
})
.config(function($ionicConfigProvider){
    $ionicConfigProvider.tabs.style("standard");
})

var appConfig = {
    //PRODUCTION
//   api_base_url: 'http://url.com/vendor/v1/',
//    image_api_url: 'https://url.com/endpoint/'

    //UAT
    api_base_url: 'http://url.com/vendor/v1/',
    image_api_url: 'https://url.com/endpoint/'



}

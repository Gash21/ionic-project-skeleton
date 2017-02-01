angular.module('starter.config', [])
.constant('APP_CONFIG', {
    version: '2.0.1',
    mode: 'release'
})

.constant('DB_CONFIG', {
    name: 'seekmi_customer',
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
          name: 'tblservicetags',
          columns: [
              {name: 'id', type: 'integer primary key'},
              {name: 'tagId', type: 'integer'},
              {name: 'subserviceId', type: 'integer'},
              {name: 'serviceTag', type: 'text'},
              {name: 'isEnglish', type: 'text'},
              {name: 'createdDate', type: 'text'}
          ]
        },
        {
          name: 'tblprojects',
          columns: [
              {name: 'id', type: 'integer'},
              {name: 'projectId', type: 'integer primary key'},
              {name: 'userId', type: 'integer'},
              {name: 'serviceId', type: 'integer'},
              {name: 'serviceName', type: 'text'},
              {name: 'serviceNameInd', type: 'text'},
              {name: 'status', type: 'text'},
              {name: 'latitude', type: 'text'},
              {name: 'longitude', type: 'text'},
              {name: 'requestLocation', type: 'text'},
              {name: 'cityName', type: 'text'},
              {name: 'budgetMin', type: 'text'},
              {name: 'budgetMax', type: 'text'},
              {name: 'budgetType', type: 'text'},
              {name: 'jobId', type: 'text'},
              {name: 'isReviewed', type: 'text'},
              {name: 'quoteRequestCount', type: 'integer'},
              {name: 'lastAccess', type: 'text'},
              {name: 'voucherCode', type: 'text'},
              {name: 'campaignId', type: 'integer'},
              {name: 'modifiedDate', type: 'text'},
              {name: 'createdDate', type: 'text'}
          ]
        },
        {
          name: 'tblprojectdetails',
          columns: [
              {name: 'id', type: 'integer'},
              {name: 'projectDetailId', type: 'integer primary key'},
              {name: 'projectId', type: 'integer'},
              {name: 'userId', type: 'integer'},
              {name: 'questionId', type: 'integer'},
              {name: 'questionName', type: 'text'},
              {name: 'questionNameInd', type: 'text'},
              {name: 'optionId', type: 'integer'},
              {name: 'optionVal', type: 'text'},
              {name: 'optionValInd', type: 'text'},
              {name: 'fieldType', type: 'text'},
              {name: 'extras', type: 'text'},
              {name: 'orders', type: 'integer'}
          ]
        },
        {
          name: 'tblquoterequest',
          columns: [
              {name: 'id', type: 'integer'},
              {name: 'requestId', type: 'integer primary key'},
              {name: 'projectId', type: 'integer'},
              {name: 'userId', type: 'integer'},
              {name: 'prosId', type: 'integer'},
              {name: 'prosFirstName', type: 'text'},
              {name: 'prosLastName', type: 'text'},
              {name: 'prosUserPhoto', type: 'text'},
              {name: 'status', type: 'text'},
              {name: 'businessName', type: 'text'},
              {name: 'quotePrice', type: 'text'},
              {name: 'priceType', type: 'text'},
              {name: 'quoteMessage', type: 'text'},
              {name: 'recentMessage', type: 'text'},
              {name: 'reviewCount', type: 'integer'},
              {name: 'rating', type: 'text'},
              {name: 'isDeleted', type: 'text'},
              {name: 'isArchived', type: 'text'},
              {name: 'lastChatMessageDate', type: 'text'},
              {name: 'readByVendorFlag', type: 'text'},
              {name: 'readByUserFlag', type: 'text'},
              {name: 'userFlagUnread', type: 'integer'},
              {name: 'modifiedDate', type: 'text'},
              {name: 'createdDate', type: 'text'}
          ]
        },
        {
          name: 'tblquotemessage',
          columns: [
              {name: 'id', type: 'integer'},
              {name: 'requestId', type: 'integer'},
              {name: 'projectId', type: 'integer'},
              {name: 'userId', type: 'integer'},
              {name: 'messageId', type: 'integer primary key'},
              {name: 'messageFrom', type: 'integer'},
              {name: 'messageTo', type: 'integer'},
              {name: 'message', type: 'text'},
              {name: 'readFlag', type: 'text'},
              {name: 'time_left', type: 'text'},
              {name: 'quotePriceText', type: 'text'},
              {name: 'readByVendorFlag', type: 'text'},
              {name: 'readByUserFlag', type: 'text'},
              {name: 'createdDate', type: 'text'}
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

//.constant('GCM_SENDER_ID', '245412752281'); // GCM UAT
.constant('GCM_SENDER_ID', '674518732620') // GCM PRODUCTION

.constant('IMG_URL', 'https://seekmi.com/images/mobile/') // PRODUCTION
// .constant('IMG_URL', 'http://uat.seekmi.com/images/mobile/'); // UAT

var appConfig = {
    //PRODUCTION
//   api_base_url: 'https://apic.seekmi.com/vendor/v1',
//   image_api_url: 'https://apic.seekmi.com/seekmi/'

    //UAT
    api_base_url: 'http://apic-uat.seekmi.com/vendor/v1/',
    image_api_url: 'https://www.seekmi.com/seekmi/'



}

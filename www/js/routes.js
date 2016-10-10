angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })





    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })





    .state('index', {
      url: '/page3',
      templateUrl: 'templates/index.html',
      controller: 'indexCtrl'
    })





    .state('reservation', {
      url: '/page4/:id',
      templateUrl: 'templates/reservation.html',
      controller: 'reservationCtrl'
    })





    .state('domicile', {
      url: '/page5/:id',
      templateUrl: 'templates/domicile.html',
      controller: 'domicileCtrl'
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});

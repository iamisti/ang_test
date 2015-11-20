(function(){
  function ClubsConfig(){
    /** This is an example state, this is not correct please make it working **/
    $stateProvider
      .state('clubs', {
        url: '/dashboard',
        views:{
          'content' : {
            controller : 'DashboardCtrl',
            templateUrl: 'modules/dashboard/views/dashboard.html'
          }
        }
      });
  }

  angular.module('clubs',['ui.router'])
    .config(ClubsConfig);
})();

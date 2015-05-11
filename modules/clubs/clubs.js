(function(){
  function ClubsConfig(){
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

//Home Controller

var Home = require('./homeFactory.js');

module.exports = function homeController($scope, $state, Home){

  $scope.member = {};
  $scope.allMembers = Home.allMembers;
  $scope.trendingMembers = Home.trendingMembers;

  $scope.gotoMember = function(){
    var id = $scope.memberSearch.id;
    $state.go('profile', {id:id});
  };

};

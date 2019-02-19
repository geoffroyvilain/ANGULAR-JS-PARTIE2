var schoolApp = angular.module('schoolApp',[]);//DECLARATION DU MODULE SCHOOLAPP
// CONTROLLER CREE AVEC STUDENTS+CTRL               SCOPE: ICI ON CREE UN SCOPE POUR LE CONTROLLER         
schoolApp.controller('studentsCtrl',function($scope){
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
});

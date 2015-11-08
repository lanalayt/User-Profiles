angular.module('alProfile')
  .controller('ProfileController', ['$scope', '$routeParams', 'alMessage','alUser', function($scope, $routeParams, alMessage, alUser) {

  $scope.users = alUser.getAllUsers()
  $scope.currUser = $scope.users[$routeParams.name];
  $scope.addNewFriendClicked; 

 $scope.sendMessage = function(message, name) {
 	alMessage.saveMessage(message, name, $routeParams.name); 
 	alert("Message has been sent!");
 }


 $scope.getMessages = function() {
 	return alMessage.getMessages($routeParams.name);
 }

 $scope.getListOfUsers = function() {
 	var people = [];
    for(userKey in $scope.users){
        people.push($scope.users[userKey].key);
    } 
    return people; 
 }   

 $scope.addToFriendsList = function(user) {
 	$scope.addNewFriendClicked = false;
   	var friendsList = $scope.currUser.friends;
    friendsList.push(user);
    $scope.currUser.friends = friendsList; 

 }



  }]);
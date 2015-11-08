angular.module('alMain')
  .controller('MainController', ['$scope','alUser', function($scope, alUser) {
 
  	$scope.current;
    $scope.newUserClicked = false; 

    $scope.getContacts = function(){
        var people = [];
        var users = alUser.getAllUsers();
        for(userKey in users){
            people.push(users[userKey]);
        } 
        return people; 
    }

    $scope.setCurrent = function(person){
    	$scope.current = person;
    }

    $scope.submitInfo = function(newUserInfo) {
        $scope.newUserClicked = false;
        var newUser = {};   
        newUser['name'] = newUserInfo['name'];
        newUser['homeTown'] = newUserInfo['homeTown'];
        newUser['url'] = newUserInfo['url']; 
        newUser['key'] = newUserInfo['name'].split(" ")[0].toLowerCase(); 
        var split = newUserInfo['hobbies'].split(",");
        newUser['hobbies'] = split;
        alUser.createUser(newUser);
    }

    $scope.delete = function(person) {
        var users = alUser.getAllUsers(); 
        for(userKey in users) {
            if(users[userKey].key == person.key) {
                delete users[userKey]; 
            }
        }
        if($scope.current.name == person.name) {
          $scope.current = null; 
        }
    }


  }]);
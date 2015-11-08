angular.module('alUserService', [])
  .service('alUser', [function(){

  var users = {
    alana: {
      hobbies: ["programming", "dogs", "working at paypal"],
      friends: ["carlos", "kk"],
      url: "http://cdn.attackofthecute.com/March-27-2012-16-47-56-tumblrm1h0w2hfog1qzpsuoo1500.jpg",
      homeTown: "Corpus Christi",
      key: "alana", 
      name: "Alana Layton"
    },
    carlos: {
      hobbies: ["games"],
      friends: ["alana"],
      url: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Border-Collie-3.jpg",
      homeTown: "Houston",
      key: "carlos",
      name: "Carlos Guillen"
    },
    kk : {
      hobbies: ["engineering", "dogs"],
      friends: ["carlos", "alana"],
      url: "http://www.theluxuryspot.com/wp-content/uploads/2013/08/panda-pug.jpg",
      homeTown: "Corpus Christi",
      key: "kk", 
      name: "KK Layton"
    }
  }


  this.getAllUsers = function() {
    return users; 
  }

  this.createUser = function(newUser) {
    users[newUser['key']] = newUser;
  }


  }]);
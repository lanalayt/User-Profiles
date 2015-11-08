angular.module('alMessageService', [])
  .service('alMessage', [function(){
    var messages = {
      alana: [],
      carlos: [],
      kk: []
    }

    this.saveMessage = function(message, name, sender) {
      messages[name].push({message: message, sender: sender});
    }

    this.getMessages = function(name) {
      return messages[name];
    }

  }]);
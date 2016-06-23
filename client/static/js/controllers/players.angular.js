myApp.controller('PlayersController', function(PlayerFactory){
  var self = this;

  this.create = function(){
    PlayerFactory.create(this.newPlayer, function(players){
      self.players = players;
    })
    this.newPlayer = {};
  }
})

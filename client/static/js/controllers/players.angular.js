myApp.controller('PlayersController', function(PlayerFactory, ngMessages){
  var self = this;

  PlayerFactory.index(function(players){
    self.players = players;
  });

  this.create = function(){
    PlayerFactory.create(this.newPlayer, function(players){
      self.players = players;
    })
    this.newPlayer = {};
  }

  this.destroy = function(playerId){
      PlayerFactory.destroy(playerId, function(players){
        self.players = players;
      })
  }
})

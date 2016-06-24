myApp.controller('AssociationsController', function(PlayerFactory, TeamFactory){
  var self = this;

  PlayerFactory.index(function(players){
    self.players = players;
  })

  TeamFactory.index(function(teams){
    self.teams = teams;
  })

  this.create = function(){
    TeamFactory.assign(this.newAssoc, function(players){
      self.players = players;
    });
    this.newAssoc = {};
  }
})

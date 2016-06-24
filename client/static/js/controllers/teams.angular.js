myApp.controller('TeamsController', function(TeamFactory){
  var self = this;

  TeamFactory.index(function(teams){
    self.teams = teams;
  })

  this.create = function(){
    TeamFactory.create(this.newTeam, function(teams){
      self.teams = teams;
    })
    self.newTeam = {};
  }

  this.destroy = function(teamId){
    TeamFactory.destroy(teamId, function(teams){
      self.teams = teams;
    })
  }
})

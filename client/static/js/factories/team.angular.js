myApp.factory('TeamFactory', function($http){
  var factory = {};

  factory.index = function(callback){
    $http.get('/teams').success(function(teams){
      callback(teams);
    })
  }

  factory.create = function(team_info, callback){
    $http.post('/teams', team_info).success(function(teams){
      callback(teams);
    })
  }

  factory.destroy = function(teamId, callback){
    $http.post('/teams/'+teamId+'/destroy').success(function(teams){
      callback(teams);
    })
  }

  factory.assign = function(assoc_info, callback){
    $http.post('/teams/assoc', assoc_info).success(function(players){
      callback(players);
    })
  }

  return factory;
})

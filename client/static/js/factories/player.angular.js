myApp.factory('PlayerFactory', function($http){
  var factory = {};

  factory.create = function(player_info, callback){
    $http.post('/players', player_info).success(function(players){
      callback(players);
    })

  }


  return factory;
})

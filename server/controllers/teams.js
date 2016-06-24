var Team = mongoose.model('Team');
var Player = mongoose.model('Player');

module.exports = (function(){
  return {
    index: function(req, res){
      Team.find({}).populate('_players')
        .exec(function(err, teams){
          if (err){
            console.log(err);
          }else{
            res.json(teams);
          }
        })
    },
    create: function(req, res){
      var team = new Team(req.body);
      team.save(function(err){
        if (err){
          console.log(err);
        }else{
          res.redirect('/teams');
        }
      })
    },
    update: function(req, res){

    },
    destroy: function(req, res){
      Team.findByIdAndRemove(req.params.id, function(err){
        if (err){
          console.log(err);
        }else{
          res.redirect('/teams');
        }
      })
    },
    assoc: function(req, res){
      Team.findOne({_id: req.body.team}, function(err, team){
        Player.findOne({_id: req.body.player}, function(err, player){
          team._players.push(player);
          player._team = team._id;
          team.save(function(err){
            if (err){
              console.log(err);
            }
          })
          player.save(function(err){
            if (err){
              console.log(err);
            }
          });
          res.redirect('/players');
        })
      })
    }
  }
})()

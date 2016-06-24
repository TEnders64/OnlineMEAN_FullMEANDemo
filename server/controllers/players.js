var Player = mongoose.model('Player');

module.exports = (function(){
  return {
    index: function(req, res){
      Player.find({}).populate('_team')
        .exec(function(err, players){
          if (err){
            console.log(err);
          }else{
            res.json(players);
          }
        })
    },
    create: function(req, res){
      var player = new Player(req.body);
      player.save(function(err){
        if (err){
          console.log(err);
        }else{
          res.redirect('/players');
        }
      })
    },
    update: function(req, res){
      Player.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name}}, function(err, player){
        if (err){
          console.log(err);
        }else{
          res.redirect('/players');

        }
      })
    },
    destroy: function(req, res){
      Player.findByIdAndRemove(req.params.id, function(err){
        if (err){
          console.log(err);
        }else{
          res.redirect('/players');
        }
      })
    }
  }
})()

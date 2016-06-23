var TeamSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  _players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]
}, {timestamps: true});

mongoose.model('Team', TeamSchema);

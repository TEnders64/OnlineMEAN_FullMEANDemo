var PlayerSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  _team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'}
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);

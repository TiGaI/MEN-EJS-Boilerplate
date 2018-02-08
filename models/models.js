var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
  },
  { timestamps: true }
);

  // bio: {
  //   type: String,
  //   default: ""
  // },
  // gender: {
  //   type: String,
  //   default: ""
  // },
  // email: {
  //   type: String,
  //   required: true
  // },
  // age: {
  //   type: String,
  //   required: true
  // },
  // profileImg: {
  //   type: String
  // },
  // interestsTag: [],
  // admin: {
  //   type: Boolean,
  //   default: false
  // },
  // joinActivities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
  // createdActivities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
  // activityLatitude: {
  //   type: Number,
  //   required: true
  // },
  // activityLongitude: {
  //   type: Number,
  //   required: true
  // },
  // activityCategory:{
  //   type: String,
  //   required: true
  // },
  // activityCapacity: {
  //   type: Number,
  //   required: true
  // },
  // activityDuration: {
  //   type: Number,
  //   required: true
  // },
  // activityStartTime: {
  //   type: Date,
  //   required: true
  // },
  // checkInUser: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var questionSchema = new mongoose.Schema({
  //How can we keep track of User Activity?
  questionName: {
    type: String,
    required: true
  },
  questionTitle: {
    type: String,
    required: true
  },
  questionAnswer: {
    type: String,
    default: "",
    required: true
  },
},
{ timestamps: true }
);

var notificationsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Activity'
  },
  actionNumber: {
    type: Number,
    required: true
  }
  },
  { timestamps: true }
);


var User = mongoose.model("User", userSchema);
var Question = mongoose.model("Question", questionSchema);
var userNotification = mongoose.model("userNotification", notificationsSchema);

module.exports = {
  User: User,
  Question: Question,
  userNotification: userNotification
};
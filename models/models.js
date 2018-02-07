var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
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

var activitySchema = new mongoose.Schema({
  //How can we keep track of User Activity?
  activityCreator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  activityTitle: {
    type: String,
    required: true
  },
  activityImages: String,
  activityDescription: {
    type: String,
    default: "",
    required: true
  },
  activityLatitude: {
    type: Number,
    required: true
  },
  activityLongitude: {
    type: Number,
    required: true
  },
  activityCategory:{
    type: String,
    required: true
  },
  activityCapacity: {
    type: Number,
    required: true
  },
  activityDuration: {
    type: Number,
    required: true
  },
  activityStartTime: {
    type: Date,
    required: true
  },
  checkInUser: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
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
var Activity = mongoose.model("Activity", activitySchema);
var userNotification = mongoose.model("userNotification", notificationsSchema);

module.exports = {
  User: User,
  Activity: Activity,
  userNotification: userNotification
};
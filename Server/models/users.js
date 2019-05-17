const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    minlength: [4, 'the name is too short'],
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    minlength: [4, 'the email is too short may be not valid'],
    validate: {
      validator: validator.isEmail,
      message: 'The email is not valid email'
    }
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  quotes: {
    type: String,
    trim: true
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
})

userSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth'
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'TestingPass').toString();
  user.tokens.push({access, token})

  return user.save().then(() => {
    return token
  })
}

userSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['name', 'email']);
};


userSchema.methods.removeToken = function() {
  var user = this;
  return user.update({
    $pop: { tokens: 1}
  })
}

userSchema.statics.findByCrendentials = function(email, password) {
  var User = this;
  return User.findOne({email: email}).then(user => {
    if(!user) {
      return Promise.reject()
    }
    //bcrypt only supports callback not supports Promise
    //thats why here we create its promise
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (error, res) => {
       if(res) {
         resolve(user)
       } else {
         reject()
       }
     })
    })

  })
}
userSchema.pre('save', function(next) {
  var user = this;
  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    })
  } else {
    next()
  }
})

const User = mongoose.model('Users', userSchema)

module.exports = {User}

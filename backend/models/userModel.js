const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "should provide email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide a valide email"],
    role: {
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "please confirm your password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "passwords are not match",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    actice: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
});

const User = mongoose.Schema("User", userSchema);

module.exports = User;

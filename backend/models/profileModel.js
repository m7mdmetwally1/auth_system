const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  photo: {
    type: String,
  },
  city: {
    type: String,
  },
  number: {
    type: Number,
  },
});

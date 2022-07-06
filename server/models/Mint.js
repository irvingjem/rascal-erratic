const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const mintSchema = new Schema({
  symbol: {
      type: String,
    },
  description: {
    type: String,
    required: true,
  },
  // saved mintname from Magic Eden
  mintId: {
    type: String,
    required: true,
  },
  launchDateTime: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  name: {
    type: String,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mintSchema;

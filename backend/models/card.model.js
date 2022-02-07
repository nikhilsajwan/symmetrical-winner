const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
    type: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
      cardNumber: {
        type: Number,
        required: true,
        trim: true,
      },
  bank: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
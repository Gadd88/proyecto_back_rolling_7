const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  user_email: {
    type: String,
    required: true
  },
  user_category: {
    type: String,
    default: 'cliente',
    enum: ['admin', 'empleado', 'cliente']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  user_cart: [],
  user_favs: []
});

UsuarioSchema.methods.toJSON = function() {
  const { password, __v, _id, ...usuario } = this.toObject();
  return { usuario, user_id: _id };
};

const UsuarioModel = model('users', UsuarioSchema);

module.exports = UsuarioModel
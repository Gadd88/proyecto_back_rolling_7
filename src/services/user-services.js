const UsuarioModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registroUsuario } = require("../helpers/messages");

const nuevoUsuario = async (body) => {
  try {
    const usuarioExiste = await UsuarioModel.findOne({
      user_name: body.user_name,
    });

    if (usuarioExiste) {
      return {
        msg: "usuario no disponible",
        statusCode: 409,
      };
    }

    const usuario = new UsuarioModel(body);
    let salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(body.password, salt);

    await usuario.save();
    return {
      msg: "Usuario creado",
      statusCode: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      msg: "Error al crear el usuario",
      statusCode: 500,
      error,
    };
  }
};

const obtenerUsuarios = async () => {
  try {
    const usuarios = await UsuarioModel.find();
    return {
      usuarios,
      statusCode: 200,
    };
  } catch (error) {
    return {
      msg: "Error al obtener los usuarios",
      statusCode: 500,
      error,
    };
  }
};

const obtenerUsuario = async (idUsuario) => {
  try {
    const usuario = await UsuarioModel.findById(idUsuario);
    return {
      usuario,
      statusCode: 200,
    };
  } catch (error) {
    return {
      msg: "Error al obtener el usuario",
      statusCode: 500,
      error,
    };
  }
};

const actualizarUsuario = async (idUsuario, body) => {
  try {
    await UsuarioModel.findByIdAndUpdate({ _id: idUsuario }, body);

    return {
      msg: "Usuario actualizado",
      statusCode: 200,
    };
  } catch (error) {
    return {
      msg: "Error al actualizar el usuario",
      statusCode: 500,
      error,
    };
  }
};

const eliminarUsuario = async (idUsuario) => {
  await UsuarioModel.findByIdAndDelete({ _id: idUsuario });
  const usuarioDb = await UsuarioModel.find();
  return {
    msg: "Usuario eliminado",
    usuarios: usuarioDb,
    statusCode: 200,
  };
};

const inicioSesionUsuario = async (body) => {
  const { user_name, password } = body;

  const usuarioExiste = await UsuarioModel.findOne({ user_name });

  if (!usuarioExiste) {
    return {
      msg: "Usuario y/o contraseña incorrectos.USUARIO",
      statusCode: 400,
    };
  }
  console.log("Contraseña ingresada:", password);
  console.log("Hash almacenado:", usuarioExiste.password);

  if (!password || !usuarioExiste.password) {
    return {
      msg: "No se encontró la contraseña o el hash",
      statusCode: 500,
    };
  }
  const checkPassword = bcrypt.compareSync(password, usuarioExiste.password);

  if (!checkPassword) {
    return {
      msg: "Usuario y/o contraseña incorrectos.CONTRASEÑA",
      statusCode: 400,
    };
  }

  const payload = {
    idUsuario: usuarioExiste._id,
    rol: usuarioExiste.user_category,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return {
    token,
    rol: usuarioExiste.user_category,
    idUsuario: usuarioExiste._id,
    msg: "Usuario logueado",
    statusCode: 200,
  };
};

const habilitarUsuario = async (idUsuario) => {
  const usuario = await UsuarioModel.findById(idUsuario);
  usuario.bloqueado = false;
  await usuario.save();

  return {
    msg: "Usuario habilitado",
    statusCode: 200,
  };
};

const deshabilitarUsuario = async (idUsuario) => {
  const usuario = await UsuarioModel.findById(idUsuario);
  usuario.bloqueado = true;
  await usuario.save();

  return {
    msg: "Usuario deshabilitado",
    statusCode: 200,
  };
};

module.exports = {
  nuevoUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
  inicioSesionUsuario,
  habilitarUsuario,
  deshabilitarUsuario,
};

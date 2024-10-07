const serviciosProductos = require('../services/product-services.js');
const cobroConMp = require('../utils/cobromp.js');

const crearProducto = async (req, res) => {
  const result = await serviciosProductos.nuevoProducto(req.body, req.file && req.file.path);
  if(result.statusCode === 201) {
    res.status(201).json({message: result.message , status:result.statusCode});
  } 
  else{
    res.status(500).json({message: result.message, status:result.statusCode});
  }
}

const traerTodosProductos = async (req, res) => {
  const result = await serviciosProductos.obtenerTodosProductos();
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.message, productos: result.productos });
  } else {
    res.status(500).json({message: result.message});
  }
}

const traerProductosPorCategoria = async (req, res) => {
  const result = await serviciosProductos.obtenerProductoPorCategoria(req.params.category);
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.message, productos: result.productos});
  } else {
    res.status(500).json({status:result.statusCode, message: result.message});
  }
}

const traerUnProducto = async (req, res) => {
  const result = await serviciosProductos.obtenerProducto(req.params.product_id);
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.message, producto: result.producto});
  } else {
    res.status(500).json({message: result.message});
  }
}

const actualizarUnProducto = async (req, res) => {
  const result = await serviciosProductos.actualizarProducto(req.params.product_id, req);
  if(result.statusCode === 200) {
    res.status(200).json({ status:result.statusCode, message: result.message, producto: result.producto});
  } else {
    res.status(500).json({ message: result.message, status:result.statusCode });
  }
}

const eliminarProducto = async (req, res) => {
  const result = await serviciosProductos.eliminarProducto(req.params.product_id);
  if(result.statusCode === 200) {
    res.status(200).json({message: result.message, status:result.statusCode});
  } else {
    res.status(500).json({message: result.message});
  }
}

const agregarQuitarProductoFavorito = async (req, res) => {
  //usuario
  //6700670aba361c6683acbc7d
  //product
  //670067773a2772974bf04d36
  const result = await serviciosProductos.agregarQuitarProductoFav(req.params.idProducto, req.body.idUsuario);
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.message});
  } else {
    res.status(500).json({status:result.statusCode, message: result.message});
  }
}
const agregarQuitarProductoCarritoController = async (req, res) => {
  const result = await serviciosProductos.agregarQuitarProductoCarrito(req.params.idProducto, req.body.idUsuario);
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.message});
  } else {
    res.status(500).json({status:result.statusCode, message: result.message});
  }
}

const cobrarProductos = async(req, res) => {
  const result = await cobroConMp(req.body);
  if(result.statusCode === 200) {
    res.status(200).json({status:result.statusCode, message: result.urlPay});
  } else {
    res.status(500).json({status:result.statusCode, message: result.message});
  }
}

module.exports = {
  crearProducto,
  traerTodosProductos,
  traerUnProducto,
  actualizarUnProducto,
  eliminarProducto,
  traerProductosPorCategoria,
  agregarQuitarProductoFavorito,
  agregarQuitarProductoCarritoController,
  cobrarProductos
}
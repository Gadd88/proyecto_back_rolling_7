const serviciosProductos = require('../services/product-services.js')

const crearProducto = async (req, res) => {
  const result = await serviciosProductos.nuevoProducto(req.body, req.file.path)
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
  console.log(req.params)
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
  console.log(req.params)
  const result = await serviciosProductos.eliminarProducto(req.params.product_id);
  if(result.statusCode === 200) {
    res.status(200).json({message: result.message, status:result.statusCode});
  } else {
    res.status(500).json({message: result.message});
  }
}

module.exports = {
  crearProducto,
  traerTodosProductos,
  traerUnProducto,
  actualizarUnProducto,
  eliminarProducto,
  traerProductosPorCategoria
}

// export const agregarQuitarProductoFavorito = async (req, res) => {
//   const result = await serviciosProductos.agregarQuitarProductoFav(req.params.idProducto, req.idUsuario);
//   if(result.statusCode === 200) {
//     res.status(200).json({status:result.statusCode, message: result.message});
//   } else {
//     res.status(500).json({status:result.statusCode, message: result.message});
//   }
// }

// export const agregarProductoCarrito = async (req, res) => {
//   console.log(req.params.idProducto, req.idUsuario);
//   const result = await serviciosProductos.agregarProductoCarrito(req.params.idProducto, req.idUsuario);
//   if(result.statusCode === 200) {
//     res.status(200).json({status:result.statusCode, message: result.message});
//   } else {
//     res.status(500).json({status:result.statusCode, message: result.message});
//   }
// }

// export const eliminarProductoCarrito = async (req, res) => {
//   const result = await serviciosProductos.eliminarProductoCarrito(req.params.idProducto, req.idUsuario);
//   if(result.statusCode === 200) {
//     res.status(200).json({status:result.statusCode, message: result.message});
//   } else {
//     res.status(500).json({status:result.statusCode, message: result.message});
//   }
// }
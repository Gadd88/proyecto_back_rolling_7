const UsuarioModel = require('../models/user-model.js')
const ProductModel = require('../models/product-model.js');
const cloudinary = require('../utils/cloudinary.js');
const fs = require('fs')

 const nuevoProducto = async (body, imagenPath) => {
  const bodyProduct = body;

  bodyProduct.price = Number(bodyProduct.price);
  bodyProduct.stock = Number(bodyProduct.stock);

  if (imagenPath) {
    try {
      const imagen = await cloudinary.uploader.upload(imagenPath, {
        folder: 'onlypan',
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: 'auto',
      });
      fs.unlink(imagenPath, (err) => {
        if (err) {
          console.log(err);
        }
      })
      bodyProduct.product_image = imagen.url
      bodyProduct.product_image_id = imagen.public_id
    } catch (error) {
      console.log(error)
      return {
        message: "Problemas con la carga de imagen",
        statusCode: 500,
      };
    }
  }

  try {
    const producto = new ProductModel(bodyProduct);
    await producto.save();
    return {
      message: "Producto creado",
      statusCode: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Error al crear el producto",
      statusCode: 500,
      error,
    };
  }
};

 const obtenerTodosProductos = async () => {
  try {
    const productos = await ProductModel.find();
    return {
      message: "Productos obtenidos",
      statusCode: 200,
      productos,
    };
  } catch (error) {
    return {
      message: "Error al obtener los productos",
      statusCode: 500,
      error,
    };
  }
};

 const obtenerProductoPorCategoria = async (req) => {
  try {
    let productos = await ProductModel.find();
    productos = productos.filter((producto) => producto.product_category.toLocaleLowerCase() === req.toLocaleLowerCase());
    return {
      message: "Productos obtenidos",
      statusCode: 200,
      productos,
    };
  } catch (error) {
    return {
      message: "Error al obtener los productos",
      statusCode: 500,
      error,
    };
  }
};

 const obtenerProducto = async (idProducto) => {
  try {
    const producto = await ProductModel.findById(idProducto);
    if (!producto)
      return { message: "Producto no encontrado", statusCode: 500 };
    return {
      message: "Producto obtenido",
      statusCode: 200,
      producto,
    };
  } catch (error) {
    return {
      message: "Producto no encontrado",
      statusCode: 500,
    };
  }
};

 const actualizarProducto = async (idProducto, req) => {
  const bodyProduct = req.body;
  if(req.file) {
    try {
      const imagen = await cloudinary.uploader.upload(req.file.path);
      bodyProduct.product_image = imagen.url
      bodyProduct.product_image_id = imagen.public_id
      await eliminarImagen(idProducto)
    } catch (error) {
      return {
        message: "Problemas con la carga de imagen",
        statusCode: 500,
      };
    }
  }
  try {
    const productoActualizado = await ProductModel.findByIdAndUpdate(idProducto, bodyProduct, {new:true})
    return {
      message: "Producto Actualizado",
      statusCode: 200,
      producto: productoActualizado,
    };
  } catch (error) {
    return {
      message: "Producto no encontrado",
      statusCode: 500,
    };
  }
};

 const eliminarProducto = async (idProducto) => {
  try {
    await eliminarImagen(idProducto)
    const exist = await ProductModel.findByIdAndDelete(idProducto);
    if (!exist) return { message: "Producto no encontrado", statusCode: 500};
    return {
      message: "Producto Eliminado",
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: "Producto no encontrado",
      statusCode: 500,
    };
  }
};

const eliminarImagen = async (idProducto) => {
  try {
    const producto = await ProductModel.findById(idProducto);
    if (!producto) return { message: "Producto no encontrado", statusCode: 500 };
    if (producto.product_image && producto.product_image_id) {
      // Eliminar la imagen de Cloudinary usando el public_id
      await cloudinary.uploader.destroy(producto.product_image_id);
      
      // Eliminar la referencia de la imagen en el producto
      producto.product_image = null;
      producto.product_image_id = null;
      
      await producto.save();
      
      return {
        message: "Imagen eliminada",
        statusCode: 200,
        producto,
      };
    } else {
      return {
        message: "No hay imagen para eliminar",
        statusCode: 400,
      };
    }
  } catch (error) {
    return {
      message: "Error al eliminar la imagen",
      statusCode: 500,
    };
  }
};

const agregarQuitarProductoFav = async (idProducto, idUsuario) => {
  try {
    const {_id} = await ProductModel.findById(idProducto);
    const idString = _id.toString();
    const usuario = await UsuarioModel.findById(idUsuario);
    if (usuario.user_favs.includes(_id)) {
      usuario.user_favs = usuario.user_favs.filter(fav => fav.toString() !== idString);
      await usuario.save();
      return { message: "Producto eliminado de favoritos", statusCode: 200 };
    } else {
      usuario.user_favs.push(_id);
      await usuario.save();
      return { message: "Producto agregado a los favoritos", statusCode: 200 };
    }
  }
  catch (error) {
    console.log(error);
    return { message: "Error al agregar o quitar producto de favoritos", statusCode: 500 };
  }
}

const agregarQuitarProductoCarrito = async (idProducto, idUsuario) => {
  try {
    const {_id} = await ProductModel.findById(idProducto);
    const idString = _id.toString();
    const usuario = await UsuarioModel.findById(idUsuario);
    if (usuario.user_cart.includes(_id)) {
      usuario.user_cart = usuario.user_cart.filter(cart => cart.toString() !== idString);
      await usuario.save();
      return { message: "Producto eliminado de carrito", statusCode: 200 };
    } else {
      usuario.user_cart.push(_id);
      await usuario.save();
      return { message: "Producto agregado al carrito", statusCode: 200 };
    }
  }
  catch (error) {
    console.log(error);
    return { message: "Error al agregar o quitar producto del carrito", statusCode: 500 };
  }
}

module.exports = {
  nuevoProducto,
  obtenerTodosProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerProductoPorCategoria,
  eliminarImagen,
  agregarQuitarProductoFav,
  agregarQuitarProductoCarrito
}
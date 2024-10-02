const swaggerDefinition = {
  "/products": {
    get: {
        tags: ["Productos"],
      summary: "Obtiene todos los productos",
      responses: {
        200: {
          description: "Lista de panes",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    product_name: { type: "string" },
                    product_price: { type: "number" },
                    product_description: { type: "string" },
                    product_image: { type: "string" },
                    product_image_id: { type: "string" },
                    product_stock: { type: "number" },
                    product_category: { type: "string" },
                    isActive: { type: "boolean" },
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Error al obtener los productos",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    post: {
        tags: ["Productos"],
      summary: "Agrega un producto",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                product_name: { type: "string" },
                product_price: { type: "number" },
                product_description: { type: "string" },
                product_image: { type: "string" },
                product_image_id: { type: "string" },
                product_stock: { type: "number" },
                product_category: { type: "string" },
              },
              required: [
                "product_name",
                "product_price",
                "product_description",
                "product_image",
                "product_image_id",
                "product_stock",
                "product_category",
              ],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Se agregó el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  product_name: { type: "string" },
                  product_price: { type: "number" },
                  product_description: { type: "string" },
                  product_image: { type: "string" },
                  product_image_id: { type: "string" },
                  product_stock: { type: "number" },
                  product_category: { type: "string" },
                  isActive: { type: "boolean" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al agregar el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/products/{product_id}": {
    get: {
        tags: ["Productos"],
      summary: "Obtiene un producto",
      parameters: [
        {
          name: "product_id",
          in: "path",
          description: "ID del producto",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Producto obtenido",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  product_name: { type: "string" },
                  product_price: { type: "number" },
                  product_description: { type: "string" },
                  product_image: { type: "string" },
                  product_image_id: { type: "string" },
                  product_stock: { type: "number" },
                  product_category: { type: "string" },
                  isActive: { type: "boolean" },
                },
              },
            },
          },
        },
        404: {
          description: "Producto no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al obtener un producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    patch: {
        tags: ["Productos"],
      summary: "Actualiza un producto",
      parameters: [
        {
          name: "product_id",
          in: "path",
          description: "ID del producto",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Se actualizó el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Producto no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al actualizar el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    delete: {
        tags: ["Productos"],
      summary: "Elimina un producto",
      responses: {
        200: {
          description: "Se eliminó el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Producto no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al eliminar el producto",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/users": {
    get: {
        tags: ["Usuarios"],
      summary: "Obtiene todos los usuarios",
      responses: {
        200: {
          description: "Lista de usuarios",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    user_name: { type: "string" },
                    user_email: { type: "string" },
                    user_category: { type: "string" },
                    isActive: { type: "boolean" },
                    user_cart: { type: "array" },
                    user_favs: { type: "array" },
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Error al obtener los usuarios",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    post: {
        tags: ["Usuarios"],
      summary: "Agrega un usuario",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                user_name: { type: "string" },
                password: { type: "string" },
                user_email: { type: "string" },
                user_category: { type: "string" },
              },
              required: [
                "user_name",
                "password",
                "user_email",
              ],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Usuario agregado con éxito",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                    user_name: { type: "string" },
                    password: { type: "string" },
                    user_email: { type: "string" },
                    user_category: { type: "string" },
                    isActive: { type: "boolean" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al crear usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/users/{user_id}": {
    get: {
        tags: ["Usuarios"],
      summary: "Obtiene un usuario",
      parameters: [
        {
          name: "user_id",
          in: "path",
          description: "ID del usuario",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                    _id: { type: "string" },
                    user_name: { type: "string" },
                    user_email: { type: "string" },
                    user_category: { type: "string" },
                    isActive: { type: "boolean" },
                    user_cart: { type: "array" },
                    user_favs: { type: "array" },
                },
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al obtener usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    patch: {
        tags: ["Usuarios"],
      summary: "Actualiza un usuario",
      parameters: [
        {
          name: "user_id",
          in: "path",
          description: "ID del usuario",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                user_name: { type: "string" },
                password: { type: "string" },
                user_email: { type: "string" },
                user_category: { type: "string" },
              },
              required: [
                "user_name",
                "password",
                "user_email",
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Usuario actualizado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al actualizar usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    delete: {
        tags: ["Usuarios"],
      summary: "Elimina un usuario",
      parameters: [
        {
          name: "user_id",
          in: "path",
          description: "ID del usuario",
          required: true,
          schema: {
            type: "string",
          },
        }
      ],
      responses: {
        200: {
          description: "Se eliminó el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        500: {
          description: "Error al eliminar el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/users/{user_id}/habilitar": {
    patch: {
        tags: ["Usuarios"],
      summary: "Habilita un usuario",
      parameters: [
        {
            name: "user_id",
            in: "path",
            description: "ID del usuario",
            required: true,
            schema: {
              type: "string",
            },
        }
      ],
      responses: {
        200: {
          description: "Se habilitó el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },  
          },
        },
        500: {
          description: "Error al habilitar el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    }
  },
  "/users/{user_id}/deshabilitar": {
    patch: {
        tags: ["Usuarios"],
      summary: "Deshabilita un usuario",
      parameters: [
        {
            name: "user_id",
            in: "path",
            description: "ID del usuario",
            required: true,
            schema: {
              type: "string",
            },
        }
      ],
      responses: {
        200: {
          description: "Se deshabilitó el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },  
          },
        },
        500: {
          description: "Error al deshabilitar el usuario",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    }
  }
};

module.exports = swaggerDefinition;

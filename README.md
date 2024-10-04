
# Proyecto Final del curso Backend con NodejS, Express y MongoDB de RollingCode School

OnlyPan

### Integrantes:
- Alejandro Díaz
- Matias Saade
- Facundo Cuezzo
- Luis Chrestia

### Deploy
https://proyecto-back-rolling-7.onrender.com/api

### Documentación
https://proyecto-back-rolling-7.onrender.com/api/doc

### Repositorio
https://github.com/Gadd88/proyecto_back_rolling_7

### Requisitos Técnicos:

1. Servidor con Node.js
 - Crear un servidor desde cero utilizando una clase “Server”.
 - Configurar el servidor para manejar rutas y middlewares.
2. Base de Datos con MongoDB
 - Conectar el servidor a una base de datos MongoDB.
 - Crear modelos para Usuarios y Productos utilizando Mongoose.
3. Autenticación y Seguridad
 - Implementar el registro e inicio de sesión de usuarios.
 - Hashear las contraseñas utilizando `bcrypt`.
 - Crear un sistema de recuperación de contraseña que incluya el envío de un enlace seguro
por correo electrónico.
 - Proteger rutas mediante middleware de autenticación con JWT.
 - Desarrollar un middleware para autenticar el rol del usuario y restringir el acceso a ciertas rutas según el rol.
4. Integración con Servicios Externos
 - MercadoPago: Implementar la integración para manejar pagos.
 - Nodemailer: Configurar y utilizar Nodemailer para enviar correos electrónicos (e.g., para la recuperación de contraseñas).
 - Cloudinary: Manejo de imágenes
 - WhatsApp: Consumir la API para enviar mensajes a los usuarios, por ejemplo, confirmaciones de compra.
5. Funcionalidades del Ecommerce
 - Registro y Gestión de Usuarios: Permitir a los usuarios registrarse, iniciar sesión, y gestionar su cuenta.
 - Catálogo de Productos: Crear rutas para gestionar productos (CRUD: Crear, Leer, Actualizar, Eliminar).
 - Carrito de Compras: Implementar la lógica para que los usuarios puedan agregar productos a un carrito y proceder al pago.
 - Órdenes de Compra: Registrar las órdenes de compra en la base de datos y enviar notificaciones por correo y whatsapp
6. Documentación y Buenas Prácticas
 - Documentar todas las rutas de la API utilizando Swagger o Postman.
 - Aplicar principios de código limpio y seguir las buenas prácticas en el manejo de errores y organización del código.
 - Configurar variables de entorno para datos sensibles como claves API, credenciales de base de datos, etc.
7. Deploy: por ejemplo en Vercel o cualquier otro que el equipo lo vea apropiado
## Instalación

Para utilizar el proyecto, puedes clonar este repositorio con el comando

```bash
  git clone https://github.com/Gadd88/proyecto_back_rolling_7
```

Luego de ello, debes ingresar en la carpeta creada y correr el comando de instalación de dependencias

```bash
  cd proyecto_back_rolling_7
  npm install
```

Esto instalará lo necesario para ejecutar el proyecto con el siguiente comando. 

```bash
  npm run dev
```
Con el proyecto ya ejecutado, podrás visualizar la documentación ingresando a la siguiente dirección http://localhost:3001/api/doc


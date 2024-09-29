const jwt = require("jsonwebtoken");

const checkAuth = (rol) => {
  return (req, res, next) => {
    try {
      const token = req.header('auth');
      if (!token) {
        return res.status(403).json({ message: 'No estás autorizado' });
      }
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
      if (verifyToken.rol !== rol) {
        return res.status(403).json({ message: 'No estás autorizado' });
      }
      req.user_id = verifyToken.user_id;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error en la autenticación' });
    }
  };
};

module.exports = checkAuth;  


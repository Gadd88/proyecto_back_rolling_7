const jwt = require('jsonwebtoken')

const checkAuth = (rol) => (req, res, next) => {
    try{
        const token = req.header('Authorization') ? req.header('Authorization').split(' ')[1] : null
        if(!token){
            return res.status(403).json({message: 'No estas autorizado'})
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(verifyToken.rol !== rol){
            return res.status(403).json({message: 'No estas autorizado'})
        }
        req.user_id = verifyToken.idUsuario

        next()

    }catch(error){
        console.log(error)
    }
}

module.exports = checkAuth
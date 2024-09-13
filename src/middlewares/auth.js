import jwt from "jsonwebtoken";

export const checkAuth = (rol, req, res, next) => {
    try{
        const token = req.header('auth')
        if(!token){
            return res.status(403).json({message: 'No estas autorizado'})
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(verifyToken.rol !== rol){
            return res.status(403).json({message: 'No estas autorizado'})
        }
        req.user_id = verifyToken.user_id

        next()

    }catch(error){
        console.log(error)
    }
}
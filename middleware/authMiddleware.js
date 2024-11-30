// verify token middleware
const jwt = require('jsonwebtoken')

export const verifyToken = (req, res, next) =>{
    // get the token from the request headers
    const token = req.header['authorization']
//     check if token is valid
    if(!token){
        return res.status(401).json({error: 'Unauthorized'})
    }
//     verify token
    jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) =>{
        if(err){
            return res.status(401).json({error: 'Unauthorized'})
        }
        req.user = decoded;
        next();
    });
};
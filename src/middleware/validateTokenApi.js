require('dotenv').config();

const validateToken = (req,res,next) => {
    console.log('req:', req);
    if( req.headers.authorization == process.env.TOKEN_API){
        next()
    }else{
        res.status(401).send('Token incorrecto no se encuentra autorizado')
    }
}

module.exports = validateToken;
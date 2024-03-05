require('dotenv').config();

const validateToken = (req,res,next) => {
    console.log('header:', req.headers.authorization);
    console.log('token: ', process.env.TOKEN_API);
    if( req.headers.authorization == process.env.TOKEN_API){
        next()
    }else{
        res.status(401).send('Token incorrecto no se encuentra autorizado')
    }
}

module.exports = validateToken;
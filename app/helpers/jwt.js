const jwt = require('jsonwebtoken')

const generarJWT = (id, correo) => {

    return new Promise( (resolve, reject)=> {
        const payload = {
            id: id,
            correo: correo
        }
        
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('no se pudo generar el JWT');
            } else {
                resolve(token);
            }
        });
    });
    
    
}

module.exports = {
    generarJWT
}
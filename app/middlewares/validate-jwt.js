const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    } else {
        try {
            const { id, nombre, correo } = jwt.verify(token, process.env.JWT_SECRET);
            req.id = id;
            req.nombre = nombre;
            req.correo = correo;
        } catch (error) {
            console.log(error);
            return res.status(401).json({
                ok: false,
                msg: 'Token no valido'
            })
        }
    }

    next();
}

module.exports = {
    validateJWT
}
const { response } = require('express');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../../helpers/jwt');
const { UserModel } = require('../../database/db');

const login = async(req, res = response) => {
    const { correo, password} = req.body;

    if(!correo === ''){
        res.status(500).json({
            ok: false,
            msg: 'Debe de poner un correo'
        });
        return;
    }

    if(!password === ''){
        res.status(500).json({
            ok: false,
            msg: 'Debe de poner una contraseña'
        });
        return;
    }

    const usuarioDB = await UserModel.findOne({
        where: {
            correo: correo
        }
    });

    if(!usuarioDB) {
        res.status(404).json({
            ok: false,
            msg: 'No hay correo registrado con ese nombre'
        });
        return; 
    }

    const validarPass = bcrypt.compareSync(password, usuarioDB.password);

    if (!validarPass) {
        res.status(400).json({
            ok: false,
            msg: 'Contraseña incorrecta'
        });
        return;
    }

    const token = await generarJWT(usuarioDB.id, usuarioDB.correo);

    try {
        res.json({
            ok: true,
            msg: 'Usuario Login success',
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el server hable con Ulises'
        });
    }

}

module.exports = {
    login
}
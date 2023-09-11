const { response } = require('express');
const { UserModel } = require('../../database/db');

// CRUD BASICO

// obtener todos los User
const getAllUser = async(req, res = response) => {
    const resp = await UserModel.findAll({
        where: {
            deleted: false
        }
    });

    try {
        res.json({
            ok: true,
            resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el server, hable con Ulises'
        });
    }
}

// obtener 1 User por id
const get1UserbyID = async(req, res = response) => {
    const id = req.params.id;
    const resp = await UserModel.findOne({
        where: {
            id: id
        }
    });

    if (!resp) {
        res.status(404).json({
            ok: false,
            msg: 'No hay User por ese id'
        });
    }

    try {
        res.json({
            ok: true,
            resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el server, hable con Ulises'
        });
    }
}

// crear  User
const createUser = async(req, res = response) => {
    const { body } = req;
    const resp = new UserModel(body);
    await resp.save().then(
            function() {
                res.json({
                    ok: true,
                    resp
                });
            }
        )
        .catch(
            function(error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'error en es server',
                    error: error.errors[0].message
                });
                return false;
            }
        )
}

// actualizar User
const updateUser = async(req, res = response) => {
    const id = req.params.id;
    const { body } = req;

    const resp = await UserModel.findOne({
        where: {
            id: id
        }
    });

    if (!resp) {
        res.status(404).json({
            ok: false,
            msg: 'No hay User con ese id'
        });
    }

    await resp.update(body);

    try {
        res.json({
            ok: true,
            resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el server, hable con Ulises'
        });
    }
}

// eliminacion logica de User
const deleteUser = async(req, res = response) => {
    const id = req.params.id;
    const resp = await UserModel.findOne({
        where: {
            id: id
        }
    });

    if (!resp) {
        res.status(404).json({
            ok: false,
            msg: 'No hay User con ese id'
        });
    }

    await resp.update({ deleted: true });

    try {
        res.json({
            ok: true,
            resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error en el server, hable con Ulises'
        });
    }
}

module.exports = {
    getAllUser,
    get1UserbyID,
    createUser,
    updateUser,
    deleteUser
}
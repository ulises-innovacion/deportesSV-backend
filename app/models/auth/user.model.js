'use strict';
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserModel extends Model {
        static associate(models) {}
    }

    UserModel.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        correo: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deleted: {
            type: DataTypes.INTEGER,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'User'
    });

    UserModel.addHook('beforeCreate', (usuario, opt) => {
        usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10));
    });
    return UserModel;
}
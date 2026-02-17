'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Artikel, {
        foreignKey: "author_id",
        as: "artikels",
        onDelete: "SET NULL"
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { notEmpty: true }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    role: {
      type: DataTypes.ENUM(
        "super_admin",
        "admin",
        "editor",
        "author",
        "subscribe",
        "user"
      ),
      allowNull: false,
      defaultValue: "user"
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: "Users",
    freezeTableName: true
  });
  return User;
};
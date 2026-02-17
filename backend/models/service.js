'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.hasMany(models.Galery, {
        foreignKey: "service_id",
        as: "galeries",
        onDelete: "SET NULL"
      });
      Service.hasMany(models.PriceList, {
        foreignKey: "service_id",
        as: "pricelist",
        onDelete: "SET NULL"
      })
    }
  }
  Service.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { notEmpty: true }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { notEmpty: true }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meta_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meta_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'Services',
    freezeTableName: true
  });
  return Service;
};
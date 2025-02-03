"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Funactivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funactivity.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      cost_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      ket_cost_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cost_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ket_cost_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cost_add: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ket_cost_add: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      satuan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      min_person: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      ket_person: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      lokasi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      jarak: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      waktu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Funactivity",
    }
  );
  return Funactivity;
};

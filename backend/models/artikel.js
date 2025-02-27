"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artikel.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: false },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: true },
      },
      picture: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Artikel",
    }
  );
  return Artikel;
};

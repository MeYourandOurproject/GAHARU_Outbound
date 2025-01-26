"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paket_tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Paket_tour.hasMany(models.Destination, { foreignKey: "paket_tour_id" });
      Paket_tour.hasMany(models.Price_list_1_day, {
        foreignKey: "paket_tour_id",
      });
      Paket_tour.hasMany(models.Price_list_2_day_1_night, {
        foreignKey: "paket_tour_id",
      });
    }
  }
  Paket_tour.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { notEmpty: true },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Paket_tour",
    }
  );
  return Paket_tour;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price_list_1_day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Price_list_1_day.belongsTo(models.Paket_tour, {
        foreignKey: "paket_tour_id",
      });
    }
  }
  Price_list_1_day.init(
    {
      paket_tour_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      package: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      _33_pax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { notEmpty: true },
      },
      _50_pax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { notEmpty: true },
      },
      _55_pax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Price_list_1_day",
    }
  );
  return Price_list_1_day;
};

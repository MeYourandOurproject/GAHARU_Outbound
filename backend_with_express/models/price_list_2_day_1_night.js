"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price_list_2_day_1_night extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Price_list_2_day_1_night.belongsTo(models.Paket_tour, {
        foreignKey: "paket_tour_id",
      });
    }
  }
  Price_list_2_day_1_night.init(
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
      _56_pax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Price_list_2_day_1_night",
    }
  );
  return Price_list_2_day_1_night;
};

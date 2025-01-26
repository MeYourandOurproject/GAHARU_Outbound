"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Destination.belongsTo(models.Paket_tour, { foreignKey: "paket_tour_id" });
      Destination.hasMany(models.Galery, { foreignKey: "destination_id" });
    }
  }
  Destination.init(
    {
      paket_tour_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Destination",
    }
  );
  return Destination;
};

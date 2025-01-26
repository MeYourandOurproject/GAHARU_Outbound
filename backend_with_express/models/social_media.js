"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Social_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Social_media.belongsToMany(models.Contact, {
        through: models.Contact_social_media,
        foreignKey: "social_media_id",
      });
    }
  }
  Social_media.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Social_media",
    }
  );
  return Social_media;
};

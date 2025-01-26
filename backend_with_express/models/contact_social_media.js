"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact_social_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contact_social_media.belongsTo(models.Contact, {
        foreignKey: "contact_id",
      });
      Contact_social_media.belongsTo(models.Social_media, {
        foreignKey: "social_media_id",
      });
    }
  }
  Contact_social_media.init(
    {
      contact_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      social_media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Contact_social_media",
    }
  );
  return Contact_social_media;
};

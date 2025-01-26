"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contact.hasMany(models.Phone, { foreignKey: "contact_id" });
      Contact.belongsToMany(models.Social_media, {
        through: models.Contact_social_media,
        foreignKey: "contact_id",
      });
    }
  }
  Contact.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Contact",
    }
  );
  return Contact;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Artikel, {
        foreignKey: "category_id",
        as: "artikels",
        onDelete: "SET NULL"
      });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { notEmpty: true }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true }
    },
    description: {
      type: DataTypes.TEXT,
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
    modelName: 'Category',
    tableName: "Categories",
    freezeTableName: true
  });
  return Category;
};
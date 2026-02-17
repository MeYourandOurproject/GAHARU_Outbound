'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artikel.belongsTo(models.User, {
        foreignKey: "author_id",
        as: "author"
      });
      Artikel.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category"
      });
    }
  }
  Artikel.init({
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { notEmpty: true }
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: { notEmpty: true }
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
      validate: { notEmpty: true }
    },
    pictures: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: "Categories",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    status: {
      type: DataTypes.ENUM("idea", "draft", "published"),
      defaultValue: "idea"
    },
    views: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    },
    meta_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meta_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Artikel',
    tableName: 'Artikels',
    freezeTableName: true
  });
  return Artikel;
};
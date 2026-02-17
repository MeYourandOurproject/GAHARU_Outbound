"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Artikels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      excerpt: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      content: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },
      pictures: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      thumbnail: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      category_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
      },
      author_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      status: {
        type: Sequelize.ENUM("idea", "draft", "published"),
        defaultValue: "idea",
      },
      views: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0,
      },
      meta_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      meta_description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      published_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    // Index penting untuk performa
    await queryInterface.addIndex("Artikels", ["slug"]);
    await queryInterface.addIndex("Artikels", ["category_id"]);
    await queryInterface.addIndex("Artikels", ["status", "published_at"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Artikels");
  },
};

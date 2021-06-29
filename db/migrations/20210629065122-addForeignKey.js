'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "serviceId", Sequelize.INTEGER, {
      allowNull: false,
      references: {
        model: {
          tableName: "Services",
        },
        key: "id",
      },
    });
  }}
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addColumn("Products","name", Sequelize.STRING,{
       unique:true,
       allowNull:false,
     });
     await queryInterface.addColumn("Products","slug", Sequelize.STRING,{
      unique:true,
    });
    await queryInterface.addColumn("Products","price", Sequelize.STRING,);
    await queryInterface.addColumn("Products","img", Sequelize.STRING,);
    await queryInterface.addColumn("Products","description", Sequelize.STRING,);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products","name");
    await queryInterface.removeColumn("Products","slug");
    await queryInterface.removeColumn("Products","price");
    await queryInterface.removeColumn("Products","img");
    await queryInterface.removeColumn("Products","description");
  },
};

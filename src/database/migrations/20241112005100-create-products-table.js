'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('products', { 
        
        id:{
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey:true,
        autoIncrement:true, //GERA O ID AUTOMATICAMENTE
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false, //TEM QUE SE OBRIGATORIO

      },

      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },

      category: {
        type:Sequelize.STRING,
        allowNull:false,
      },

      path: { // É o caminho da imagem expor a imagem a uma URL
        type:Sequelize.STRING,
      },  
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      } ,

      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      } ,
    
    });
     
  },

  async down (queryInterface, ) {
 
      await queryInterface.dropTable('products');
    
  }
};



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, //GERA O ID AUTOMATICAMENTE
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false, //TEM QUE SE OBRIGATORIO
        unique: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface,) {

    await queryInterface.dropTable('categories');

  },
};


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('award', {
        award: {
          id: Sequelize.NUMBER,
          title: Sequelize.STRING,
          name: Sequelize.STRING,
          points: Sequelize.NUMBER,

        }
      });

  },

  down: (queryInterface) => {

      return queryInterface.dropTable('award');

  }
};

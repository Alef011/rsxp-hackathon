module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('awards', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: Sequelize.STRING,
      name: Sequelize.STRING,
      points: Sequelize.INTEGER,
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('awards');
  },
};

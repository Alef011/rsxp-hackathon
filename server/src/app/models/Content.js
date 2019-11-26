import Sequelize, { Model } from 'sequelize';

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        url: Sequelize.STRING,
        duration: Sequelize.STRING,
        category: Sequelize.NUMBER,
        award_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Award, { foreignKey: 'award_id', as: 'award' });
  }
}

export default Content;

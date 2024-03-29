import Sequelize, { Model } from 'sequelize';

class Challenge extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
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

export default Challenge;

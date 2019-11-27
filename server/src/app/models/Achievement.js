import Sequelize, { Model } from 'sequelize';

class Achievement extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.NUMBER,
        content_id: Sequelize.NUMBER,
        award_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Content, { foreignKey: 'content_id', as: 'content' });
    this.belongsTo(models.Award, { foreignKey: 'award_id', as: 'award' });
  }
}

export default Achievement;

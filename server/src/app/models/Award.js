import Sequelize, { Model } from 'sequelize';

class Award extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        name: Sequelize.STRING,
        points: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Award;

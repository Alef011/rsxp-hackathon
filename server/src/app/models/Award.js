import Sequelize, { Model } from 'sequelize';

class Awards extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.NUMBER,
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

export default Awards;

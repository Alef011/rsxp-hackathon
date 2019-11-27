import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Content from '../app/models/Content';
import Award from '../app/models/Award';
import File from '../app/models/File';

const models = [User, Content, Award, File];

class Database {
  constructor() {
    // conexão com o banco de dados
    this.connection = new Sequelize(databaseConfig);

    this.init();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();

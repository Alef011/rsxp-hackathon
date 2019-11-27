import Achievement from '../models/Achievement';

class AchievementController {
  async index(_, res) {
    const achievement = await Achievement.findAll();

    return res.json(achievement);
  }

  async store(req, res) {
    const achievement = await Achievement.create(req.body);

    return res.status(201).json(achievement);
  }

  async update(req, res) {
    const achievement = await Achievement.findByPk(req.id);

    await achievement.update(req.body);

    return res.status(200);
  }
}

export default new AchievementController();

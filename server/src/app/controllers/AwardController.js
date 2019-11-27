import Award from '../models/Award';

class AwardController {
  async index(_, res) {
    const award = await Award.findAll();

    return res.json(award);
  }

  async store(req, res) {
    const award = await Award.create(req.body);

    return res.status(201).json(award);
  }

  async update(req, res) {
    const award = await Award.findByPk(req.id);

    await award.update(req.body);

    return res.status(200);
  }
}

export default new AwardController();

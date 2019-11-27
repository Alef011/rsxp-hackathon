import Challenge from '../models/Challenge';

class ChallengeController {
  async index(_, res) {
    const challenge = await Challenge.findAll();
    return res.json(challenge);
  }

  async store(req, res) {
    const challenge = await Challenge.create(req.body);

    return res.status(201).json(challenge);
  }

  async update(req, res) {
    const challenge = await Challenge.findByPk(req.id);

    await challenge.update(req.body);

    return res.status(200);
  }
}

export default new ChallengeController();

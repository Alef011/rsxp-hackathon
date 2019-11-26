import Award from '../models/Award';

class AwardController {
  async store(req, res) {
    const award = await Award.create(req.body);
    if (award) {
      return res.json({ message: 'ok' });
    }
  }
}

export default new AwardController();

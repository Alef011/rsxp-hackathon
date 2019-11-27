import Content from '../models/Content';

class ContentController {
  async index(_, res) {
    const content = await Content.findAll();

    return res.json(content);
  }

  async store(req, res) {
    const content = await Content.create(req.body);

    return res.status(201).json(content);
  }

  async update(req, res) {
    const content = await Content.findByPk(req.id);

    await content.update(req.body);

    return res.status(200);
  }
}

export default new ContentController();

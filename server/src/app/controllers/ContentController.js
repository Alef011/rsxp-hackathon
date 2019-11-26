import * as Yup from 'yup';
import Content from '../models/Content';

class ContentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      url: Yup.string().required(),
      duration: Yup.string().required(),
      category: Yup.number().required(),
      award_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou!' });
    }

    const { id, title, url } = await Content.create(req.body);

    // retona o dados do usuario
    return res.status(201).json({ id, title, url });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      url: Yup.string().required(),
      duration: Yup.string().required(),
      category: Yup.number().required(),
      award_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falou!' });
    }

    const content = await Content.findByPk(req.id);

    await content.update(req.body);

    return res.json({ message: 'Registro criado!' });
  }
}

export default new ContentController();

import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import User from '../models/User';

const isUserAdmin = async id =>
  User.findOne({
    where: { id, is_admin: true },
  });

class HelpAnswerController {
  async index(req, res) {
    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
      order: [['created_at', 'DESC']],
    });

    return res.json(helpOrders);
  }

  async update(req, res) {
    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { answer } = req.body;
    const { id } = req.params;

    const help = await HelpOrder.findByPk(id);

    if (!help) {
      return req.status(400).json({ error: 'Item does not exist' });
    }

    help.update({
      answer,
      answer_at: new Date(),
    });

    return res.json(help);
  }
}

export default new HelpAnswerController();

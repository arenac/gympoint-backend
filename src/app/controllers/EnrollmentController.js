import * as Yup from 'yup';

import Enrollment from '../models/Enrollment';
import User from '../models/User';
import Plan from '../models/Plan';
import Student from '../models/Student';

const isUserAdmin = async id =>
  User.findOne({
    where: { id, is_admin: true },
  });

class EnrollmentController {
  async index(req, res) {
    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    return res.json();
  }

  async store(req, res) {
    const schema = Yup.object().shape({});

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    return res.json();
  }

  async update(req, res) {
    const schema = Yup.object().shape({});

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    return res.json();
  }

  async delete(req, res) {
    if (!isUserAdmin(req.userId)) {
      return res.status(401).json({ error: 'User not authorized' });
    }

    return res.json();
  }
}

export default new EnrollmentController();

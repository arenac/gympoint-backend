import * as Yup from 'yup';

import Student from '../models/Student';
import User from '../models/User';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .required()
        .moreThan(14),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    const isUserAdmin = await User.findOne({
      where: { id: req.userId, is_admin: true },
    });

    if (!isUserAdmin) {
      return res.status(410).json({ error: 'User not authorized' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists!' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    );
    return res.json({ id, name, email, age, weight, height });
  }
}

export default new StudentController();

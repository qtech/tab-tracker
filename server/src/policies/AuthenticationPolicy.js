const Joi = require('@hapi/joi');

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain only the following characters: lower case, Upper case, numerics.
              <br>
              2. It must be atleast 8 characters in length and not more than 32 characters in length.
            `
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid Registration Information'
          });
      }
    } else {
      next();
    }
  }
};

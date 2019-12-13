import Joi from "joi-browser";

const validateUserRegister = user => {
  const schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    username: Joi.string()
      .label("Username")
      .alphanum()
      .min(3)
      .required(),
    email: Joi.string()
      .label("Email Address")
      .email()
      .required()
      .regex(/^[^\s@]+@[^@]+\.[^\s@]+$/),
    password: Joi.string()
      .label("Password")
      .required()
      .alphanum()
      .min(8)
      .max(16)
      .regex(/^[a-zA-Z0-9]{3,30}$/),
    password2: Joi.string().label("Confirm Password")
  };
  return Joi.validate(user, schema);
};

export { validateUserRegister };

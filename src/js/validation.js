import Joi from "joi-browser";
import { Elements } from "./elements";

const schema = {
  id: Joi.string(),
  title: Joi.string().label("Title"),
  author: Joi.string().label("Author"),
  isbn: Joi.number()
    .min(1)
    .max(10000)
    .label("ISBN")
};

export const validFields = data => {
  const options = { abortEarly: false };
  const { error } = Joi.validate(data, schema, options);
  const message = error ? error.details.map(e => e.message) : null;
  return message;
};

export const clearInputFields = () => {
  Elements.bookFormTitle.value = "";
  Elements.bookFormAuthor.value = "";
  Elements.bookFormIsbn.value = "";
};

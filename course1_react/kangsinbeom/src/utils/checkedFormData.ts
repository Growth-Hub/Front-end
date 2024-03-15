import { AuthForm } from "../models/auth";

export const checkedFormData = (form: Partial<AuthForm>) => {
  const formValues = Object.values(form);
  const isEmpty = formValues.filter((value) => value.trim()).length;
  return isEmpty === formValues.length ? false : true;
};

export default checkedFormData;

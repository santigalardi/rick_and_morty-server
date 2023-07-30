const validation = (userData) => {
  const errors = {};

  if (!/^\S+@\S+\.\S{2,}$/i.test(userData.email)) {
    errors.email = 'Debe ser un email';
  }
  if (!userData.email) {
    errors.email = 'Campo obligatorio';
  }
  if (userData.email.length > 35) {
    errors.email = 'El email no debe superar los 35 carácteres';
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = 'La contraseña debe contener al menos un número';
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 carácteres';
  }

  return errors;
};

export default validation;

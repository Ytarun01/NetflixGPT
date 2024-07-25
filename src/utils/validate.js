export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassValid = /^(?=.*[A-Za-z]{3,})(?=.*\d).+$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPassValid) return "Password is not valid ";

  return null;
};

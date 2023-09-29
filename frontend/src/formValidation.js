export const validateInput = (form) => {
  // Returns false if there is an invalid and true if no invalid
  for (const key in form) {
    if (form.hasOwnProperty(key)) {
      if (form[key] === "") {
        return false;
      } else {
        return true;
      }
    }
  }
};

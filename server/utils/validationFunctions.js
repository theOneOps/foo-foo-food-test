function isValidEmail(email)
{
    const regex = /^[\w-]+(\.[w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.text(email)
}

function isValidPhone(v) {
    return /^\d{8,10}$/.test(v);
}

function isValidHours(hours) {
    const regex = /^([01]\d|2[0-3]):[0-5]\d$/;
    return regex.test(hours);
  }

export {isValidEmail, isValidPhone, isValidHours}
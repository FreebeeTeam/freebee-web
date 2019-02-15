export const validateFeedback = (feedback) => {
  const errors = [];

  if (!feedback.author) {
    errors.push('author');
  } else if (!feedback.author.trim()) {
    errors.push('author');
  }

  if (!feedback.address) {
    errors.push('address');
  } else if (!feedback.address.trim()) {
    errors.push('address');
  }

  return { errors, hasErrors: errors.length !== 0 };
};

export const getFieldValidationChecker = errors => (field) => {
  return errors.includes(field);
};

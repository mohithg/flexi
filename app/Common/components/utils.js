export const isNullOrUndefined = (value) => {
  return _.isNull(value) || _.isUndefined(value)
};

export const isNotEmpty = (value) => {
  return !isNullOrUndefined(value);
};

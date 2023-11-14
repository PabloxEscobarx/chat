export const truncateString = (inputString) =>
  inputString.length > 13 ? inputString.substring(0, 13) + '...' : inputString

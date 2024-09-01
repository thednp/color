/**
 * Check to see if string passed in is a percentage
 */
const isPercentage = (n: string | number): n is string => {
  return typeof n === 'string' && n.includes('%');
};

export default isPercentage;

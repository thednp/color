import isOnePointZero from './isOnePointZero';
import isPercentage from './isPercentage';

const EPSILON = 0.000001;
const roundAroundEpsilon = (n: number, max: number) =>
  Math.abs(n * max - max) < EPSILON ? 1 : n < EPSILON ? 0 : n;

/**
 * Take input from [0, 100|255|360] and return it as [0, 1]
 * Values in [0, 1] range are no longer returned.
 * The reason is https://github.com/thednp/solid-color-picker/issues/2
 */
const bound01 = (input: string | number, max: number): number => {
  // Numbers within [0, 1] range are no longer returned
  // if (typeof input === 'number' && input <= 1 && input >= 0) {
  //   return roundAroundEpsilon(input, max);
  // }

  let n = input;
  if (isOnePointZero(input)) n = '100%';
  // console.log('isOnePointZero', n);
  const processPercent = isPercentage(n);
  // console.log(input, 'isPercent', n);

  // Automatically convert percentage into number
  // OR values like 25deg to numbers
  if (processPercent) {
    return Number.parseFloat(n as string) / 100;
  }
  n = typeof n !== 'number' ? Number.parseFloat(n) : n;
  // console.log(input, 'parseFloat ', n);

  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // n = typeof n !== 'number' ? Number.parseFloat(n) : n;
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? (n % max) + max : n > 360 ? n % max : n) / max;
    // console.log(input, 'max=360', n)
  } else {
    // Bound between 0 and max here
    // console.log(input, 'max!=360.beforeClamp', n);
    n = Math.min(max, Math.max(0, n));
    // console.log(input, 'max!=360.afterClamp', n);

    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n / max;
    // console.log(input, 'max!=360.afterConvert', n);
  }
  // console.log('finalReturn', n);

  // Handle floating point rounding errors
  // maybe round values to 6 decimals Math.round(input * (10 ** 6)) / 10 ** 6
  return roundAroundEpsilon(n, max);
};

export default bound01;

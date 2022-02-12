export function reduce<I>(
  array: Array<I>,
  callback: (pre: I, cur: I, index: number, array: Array<I>) => I,
): I;
export function reduce<I, R>(
  array: Array<I>,
  callback: (pre: R, cur: R, index: number, array: Array<I>) => R,
  accumulator: R,
): R;
export function reduce<I, R>(
  array: Array<I>,
  callback: (pre: I | R, cur: I | R, index: number, array: Array<I>) => I | R,
  accumulator?: R,
): I | R {
  let index = accumulator ? 0 : 1,
    length = array.length,
    result = accumulator || array[0];
  while (index < length) {
    result = callback(result, array[index], index, array);
    index++;
  }
  return result;
}

export function reduceRight<I>(
  array: Array<I>,
  callback: (pre: I, cur: I, index: number, array: Array<I>) => I,
): I;
export function reduceRight<I, R>(
  array: Array<I>,
  callback: (pre: R, cur: R, index: number, array: Array<I>) => R,
  accumulator: R,
): R;
export function reduceRight<I, R>(
  array: Array<I>,
  callback: (pre: I | R, cur: I | R, index: number, array: Array<I>) => I | R,
  accumulator?: R,
): I | R {
  let index = accumulator ? 0 : 1,
    length = array.length,
    result = accumulator || array[length - 1];
  while (index < length) {
    result = callback(result, array[length - index - 1], index, array);
    index++;
  }
  return result;
}

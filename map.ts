export function map<I, R>(
  array: Array<I>,
  callback: (item: I, index: number, array: Array<I>) => R,
): Array<R> {
  let index = 0,
    length = array.length,
    result = new Array(length);
  while (index < length) {
    result[index] = callback(array[index], index, array);
    index++;
  }
  return result;
}

export function mapRight<I, R>(
  array: Array<I>,
  callback: (item: I, index: number, array: Array<I>) => R,
): Array<R> {
  let index = 0,
    length = array.length,
    result = new Array(length);
  while (index < length) {
    result[index] = callback(array[length - index - 1], index, array);
    index++;
  }
  return result;
}

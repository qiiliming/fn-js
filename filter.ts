export function filter<I>(
  array: Array<I>,
  callback: (item: I) => boolean,
): Array<I> {
  let index = 0,
    length = array.length,
    result = [];
  while (index < length) {
    if (callback(array[index])) result.push(array[index]);
    index++;
  }
  return result;
}

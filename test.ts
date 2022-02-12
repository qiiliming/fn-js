import { filter } from "./filter.ts";
import { map } from "./map.ts";
import { reduce } from "./reduce.ts";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const r1 = filter(arr, (x) => x % 2 === 0);

const r2 = map(r1, (x) => x * 2);

const r3 = reduce(r2, (pre, cur) => pre + cur);

console.log(r3);

const toFilter = (arr: number[]) => filter(arr, (x) => x % 2 === 0);

const toMap = (arr: number[]) => map(arr, (x) => x * 2);

const toReduce = (arr: number[]) => reduce(arr, (pre, cur) => pre + cur);

const comb = reduce([toFilter, toMap], (pre, cur) => {
  return (arr: number[]) => cur(pre(arr));
});

console.log(toReduce(comb(arr)));

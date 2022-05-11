/**
 * @param {string}  name - string类型参数
 * @param {string} age - 可选参数，number类型
 * @param {number} [hasOwner] - 可选参数，number类型
 * @param {string} [ownerName="xyz"] - 带默认值的可选参数
 * @return {string} 这是返回值
 */

interface UniqueFunc {
  (arr: any[], key?: string | ((e: any) => string)): any[];
}

let unique: UniqueFunc;
unique = (arr, key) => {
  if (!arr) return arr;
  if (key === undefined) return [...new Set(arr)];

  const map = {
    string: (e: { [x: string]: any }) => e[key as string],
    function: (e: any) => (key as (e: any) => string)(e),
  };
  const fn = map[typeof key as 'string' | 'function'];
  const obj = arr.reduce((o, e) => ((o[fn(e)] = e), o), {});

  return Object.values(obj);
};

export default unique;

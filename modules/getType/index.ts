/**
 * @param {string}  name - string类型参数
 * @param {string=} age - 可选参数，number类型
 * @param {number} [hasOwner] - 可选参数，number类型
 * @param {string} [ownerName="xyz"] - 带默认值的可选参数
 * @return {string} 这是返回值
 */
const getType: (ele: any) => string = (ele) => {
  if (typeof ele !== 'object') return typeof ele;
  if (!ele) return 'null';

  const len = Object.prototype.toString.call(ele).length - 1;
  return Object.prototype.toString.call(ele).slice(8, len).toLowerCase();
};

export default getType;

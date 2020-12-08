const getType: (ele: any) => string = (ele) => {
  if (typeof ele !== 'object') return typeof ele;
  if (!ele) return 'null';

  const len = Object.prototype.toString.call(ele).length - 1;
  return Object.prototype.toString.call(ele).slice(8, len).toLowerCase();
};

export default getType;

/**
 * @description 获取链接参数
 * @param {string}  name - string类型参数
 * @param {string} link - 可选参数，number类型
 * @return {string | undefined} 返回
 */
const getUrlParams = (name: string, link?: string): undefined | string => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); //定义正则表达式
  const target = link ?? window.location.search.substr(1);
  const result = target.match(reg);
  if (result !== null) return decodeURIComponent(result[2]);
  return undefined;
};

export default getUrlParams;

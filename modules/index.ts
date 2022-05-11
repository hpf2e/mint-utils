/*
 * @Author: alex_chen
 * @Date: 2021-09-28 14:45:50
 * @LastEditors: alex_chen
 * @LastEditTime: 2022-05-11 10:41:52
 * @Description: 导出文件
 */
const version: string = require('../package.json').version;

export { version };

export { default as getType } from './getType';
export { default as getUA } from './getUA';
export { default as getUrlParams } from './getUrlParams';
export { default as scrollTo } from './scrollTo';
export { default as semverCompare } from './semverCompare';

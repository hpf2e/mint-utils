const version: string = require('../package.json').version;

export { version };

export { default as getType } from './getType';
export { default as getUA } from './getUA';
export { default as getUrlParams } from './getUrlParams';
export { default as semverCompare } from './semverCompare';

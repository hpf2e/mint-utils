/*
 * @Author: alex_chen
 * @Date: 2021-09-28 14:45:50
 * @LastEditors: alex_chen
 * @LastEditTime: 2022-05-11 11:24:59
 * @Description: 文件描述
 */
const path = require('path')
module.exports = {
  collectCoverage: true, // 收集测试时的覆盖率信息
  coverageDirectory: path.resolve(__dirname, './coverage'), // 指定输出覆盖信息文件的目录
  collectCoverageFrom: [ // 指定收集覆盖率的目录文件，只收集每个包的lib目录，不收集打包后的dist目录
		'modules/**/*.ts',
		'!modules/index.ts'
	],
	transform: {
    "^.+.(tsx|ts)?$": "ts-jest"
  },
  testURL: 'https://www.shuidichou.com/jd', // 设置jsdom环境的URL
  testMatch: [ // 测试文件匹配规则
    '**/__tests__/**/*.test.(tsx|ts|jsx|js)'
  ],
  testPathIgnorePatterns: [ // 忽略测试路径
    '/node_modules/'
  ],
  coverageThreshold: { // 配置测试最低阈值
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
	},
	moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
	],
	setupFiles: ["jest-useragent-mock"],
	setupFilesAfterEnv: [`${__dirname}/test/setup/test-setup.js`]
}

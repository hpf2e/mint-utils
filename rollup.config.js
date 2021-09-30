import path from 'path';
import typescript from 'rollup-plugin-typescript2'; // typescript插件
import { babel } from '@rollup/plugin-babel';  // rollup 的 babel 插件，ES6转ES5
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'; // 将非ES6语法的包转为ES6可用
import { eslint } from 'rollup-plugin-eslint';
import { DEFAULT_EXTENSIONS } from '@babel/core';
// import dev from 'rollup-plugin-dev'; // 开启本地服务器
// import livereload from 'rollup-plugin-livereload'; // 开启热更新
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import pkg from './package.json';

const rollupConfig = {
  input: path.join(__dirname, '/modules/index.ts'), // 打包入口
	output: [{ // 不同类型的出口文件
			file: pkg.main,
			format: 'cjs', // CommonJS
			exports: 'auto'
		},
		{
			file: pkg.module,
			format: 'es', // ES模块文件
			exports: 'auto'
		},
		{
			file: pkg.browser,
			format: 'umd', // 通用模块定义，以amd，cjs和iife为一体
			name: 'mint-utils',
			exports: 'auto'
		},
	],
  // external: ['lodash'], // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  plugins: [
    // 验证导入的文件
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['modules/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js'],
    }),
		typescript(),
    // 配合 commnjs 解析第三方模块
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
			browser: true,
      main: true
		}),
		// 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
		process.env.ENV === 'prod' ? terser() : null,
		process.env.ENV === 'prod' ? visualizer() : null,
  ],
	watch: {
    exclude: 'node_modules/**',
    include: 'modules/**'
  }
}

export default rollupConfig;

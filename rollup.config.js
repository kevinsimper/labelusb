// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const Config = [
	{
		input: 'src/index.js',
		output: {
			name: 'labelusb',
			file: pkg.browser,
			format: 'umd'
        },
        treeshake: false,
		plugins: [
			resolve(),
			commonjs()
		],
	}
];

export default Config;
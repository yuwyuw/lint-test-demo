import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
var path = require('path');

export default {
	input: 'index.jsx',
	output: [
		{
			dir: path.join(__dirname, '/dist'),
			format: 'cjs'
		},
		{
			file: 'bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [json()]
};
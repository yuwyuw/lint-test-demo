// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

export default {
	input: 'index.jsx',
	output: {
		dir: 'dist',
    format: 'cjs',
		sourcemap: true,
		exports: "named",
		preserveModules: true,
	},
	plugins: [
		external(),
		commonjs(),
		postcss(),
		terser(),
		resolve(),
		babel({ 
			exclude: 'node_modules/**',
			presets: ['@babel/env', '@babel/preset-react']
		})
	],
	external: [
		'react',
		'prop-types',
	],
	globals: {
		react: "React"
	}
};
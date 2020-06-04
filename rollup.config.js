import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
// import vue from 'rollup-plugin-vue'
// import css from 'rollup-plugin-css-only'

export default {
  input: 'src/main.js',
  output: {
    name: 'bundle',
    file: './build/bundle.min.js',
    format: 'iife',
    sourcemap: false,
    globals: {
      'lodash': '_',
    }
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    uglify(),
    // css(),
    // vue({ css: false })
  ]
};

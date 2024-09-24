import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',
  output: {
    file: 'dist/jinghe-lanhai.js',
    format: 'cjs',
    name: 'JingheLanhai',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    postcss(),
    typescript()
  ]
}

const typescript = require('rollup-plugin-typescript2')
const commonjs = require('rollup-plugin-commonjs')
const external = require('rollup-plugin-peer-deps-external')
// const postcss = require('rollup-plugin-postcss-modules'
const postcss = require('rollup-plugin-postcss')
const resolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify-es')
const url = require('rollup-plugin-url')
const svgr = require('@svgr/rollup').default

const simplevars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')

const pkg = require('./package.json')

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    external(),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano(),
      ],
      extendsions: ['.css'],
    }),
    uglify(),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
          'useContext',
          'useRef',
          'useEffect',
          'useState',
          'useReducer',
          'useMemo',
        ],
      },
    }),
  ],
};

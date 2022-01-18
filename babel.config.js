/* eslint global-require: off, import/no-extraneous-dependencies: off */

const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [require('@babel/plugin-transform-runtime')];

const productionPlugins = [
  require('babel-plugin-dev-expression'),

  // babel-preset-react-optimize
  require('@babel/plugin-transform-react-constant-elements'),
  require('@babel/plugin-transform-react-inline-elements'),
  require('babel-plugin-transform-react-remove-prop-types'),
];

module.exports = (api) => {
  // See docs about api at https://babeljs.io/docs/en/config-files#apicache

  const development = api.env(developmentEnvironments);

  return {
    presets: [
      // @babel/preset-env will automatically target our browserslist targets
      require('@babel/preset-env'),
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      // Stage 0
      require('@babel/plugin-proposal-function-bind'),
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],

      // Stage 1
      [require('@babel/plugin-proposal-export-default-from'), { loose: true }],
      [
        require('@babel/plugin-proposal-logical-assignment-operators'),
        { loose: true },
      ],
      [require('@babel/plugin-proposal-optional-chaining'), { loose: true }],
      [
        require('@babel/plugin-proposal-pipeline-operator'),
        { proposal: 'minimal', loose: true },
      ],
      [
        require('@babel/plugin-proposal-nullish-coalescing-operator'),
        { loose: true },
      ],
      [require('@babel/plugin-proposal-do-expressions')],

      // Stage 2
      [
        require('@babel/plugin-proposal-decorators'),
        { legacy: true, loose: true },
      ],
      [require('@babel/plugin-proposal-function-sent'), { loose: true }],
      [
        require('@babel/plugin-proposal-export-namespace-from'),
        { loose: true },
      ],
      [require('@babel/plugin-proposal-numeric-separator'), { loose: true }],
      [require('@babel/plugin-proposal-throw-expressions'), { loose: true }],

      // Stage 3
      [require('@babel/plugin-syntax-dynamic-import'), { loose: true }],
      [require('@babel/plugin-syntax-import-meta'), { loose: true }],
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
      [require('@babel/plugin-proposal-json-strings'), { loose: true }],

      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};

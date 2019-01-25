module.exports = function (baseConfig, env, defaultConfig) {
  defaultConfig.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false,
          }
        }
      }
    ],
    enforce: 'pre',
  });


  module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
};

  return defaultConfig;
};
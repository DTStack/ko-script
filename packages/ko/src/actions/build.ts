import webpack from 'webpack';
import { Options } from 'interfaces';
import { WebpackCreator } from './creator';

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

class BuildAction extends WebpackCreator {
  constructor(opts: Options) {
    super(opts);
  }

  public config() {
    const conf = {
      optimization: {
        minimizer: [
          new CssMinimizerPlugin()
        ]
      },
      plugins: [
        new webpack.optimize.SplitChunksPlugin({
          chunks: 'async',
          minSize: 30000,
          maxSize: 600000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '_',
          cacheGroups: {
            antd: {
              name: 'antd',
              test: /[\\/]node_modules[\\/]antd[\\/]/,
              chunks: 'initial',
            },
            lodash: {
              name: 'lodash',
              test: /[\\/]node_modules[\\/]lodash[\\/]/,
              chunks: 'initial',
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        })
      ]
    }
    return this.mergeConfig(conf);
  }

  public action() {

  }
}

export default BuildAction;
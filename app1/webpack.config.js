import HtmlWebpackPlugin from 'html-webpack-plugin'
import { container } from 'webpack'
import ExternalTemplateRemotesPlugin from 'external-remotes-plugin'
import { join } from 'path'

const { ModuleFederationPlugin } = container

export const entry = './src/index'
export const mode = 'development'
export const devServer = {
  static: join(__dirname, 'dist'),
  port: 3001,
}
export const output = {
  publicPath: 'auto',
}
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react'],
      },
    },
  ],
}
export const plugins = [
  new ModuleFederationPlugin({
    name: 'app1',
    remotes: {
      app2: 'app2@[app2Url]/remoteEntry.js',
      app3: 'app3@[app3Url]/remoteEntry.js',
    },
    shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
  }),
  new ExternalTemplateRemotesPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
]

const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './client/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build'),
    clean: true
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externalsPresets: { node: true }, // In order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()] // In order to ignore all modules in node_modules folder
}

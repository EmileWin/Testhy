const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader", "source-map-loader"],
      },
      {
        test: /(\.css|\.scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", 
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: () => [require('autoprefixer')],
            }
          }
        }
      ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};

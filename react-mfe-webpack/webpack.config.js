const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  devServer: {
    port: 8080, // Chạy Remote App trên port 3001
    headers: {
      "Access-Control-Allow-Origin": "*", // ✅ Cho phép mọi origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },
  /* đoạn code sau sẽ load các gói babel vào webpack */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      name: "AppReact2Mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./bootstrap.js",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};

/*
 * @Author: xyw
 * @Date: 2022-05-10 23:18:55
 * @LastEditors: xyw
 * @LastEditTime: 2022-06-14 16:43:12
 * @Description:
 */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/sc",
  lintOnSave: false,
  devServer: {
    proxy: {
      "/v1": {
        // target: "https://project.develop.lanchengiot.cn/project_device",
        target: "https://sample2.lanchengiot.cn",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 192,
            remPrecision: 2,
          }),
        ],
      },
    },
  },
};

/*
 * @Author: xyw
 * @Date: 2022-05-10 23:18:55
 * @LastEditors: lz
 * @LastEditTime: 2022-05-14 12:58:17
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
        target: "https://project.develop.lanchengiot.cn/project_device",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
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
        symbolId: "icon-[name]"
      })
      .end();
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 192,
            remPrecision: 2
          })
        ]
      }
    }
  }
};

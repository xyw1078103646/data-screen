/*
 * @Author: xiaoyiwen yyxiao@gongsibao.com
 * @Date: 2022-05-29 16:54:27
 * @LastEditors: xyw1078103646 1078103646@qq.com
 * @LastEditTime: 2022-06-02 17:53:21
 * @FilePath: \data-screen\mock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const path = require("path");
const Mock = require("mockjs"); //mockjs 导入依赖模块
// const JSON5 = require("json5"); //json5的作用是可以解析json文件中的注释
//读取json文件
function getJsonFile(filePath) {
    //读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
    //解析并返回
    return JSON.parse(json);
}

//返回一个函数
module.exports = function(app) {
    if (process.env.MOCK == "true") {
        //为了满足当后台有接口的时候，不是使用mock数据，在此处做一个判断，可以在.env文件中对设置
        //监听http请求
        app.post("/v1/device/analyse", function(rep, res) {
            //每次响应请求时读取mock data的json文件
            //getJsonFile方法定义了如何读取json文件并解析成数据对象
            var json = getJsonFile("./index.json");
            //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
            console.log(777,json)
            res.json(Mock.mock(json));
        });
    }
};
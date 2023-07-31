/*
项目：考途大学搜题
下载：https://apps.apple.com/cn/app/%E8%80%83%E9%80%94%E5%A4%A7%E5%AD%A6%E6%90%9C%E9%A2%98-%E6%95%99%E6%9D%90%E7%BD%91%E8%AF%BE%E8%AF%95%E5%8D%B7%E7%AD%94%E6%A1%88/id1552320685
作者：@ios151原@mcdasheng688


[rewrite_local]
^https:\/\/api-service\.tutusouti\.com\/appServiceApi\/vip\/newUserPayVipData url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaotu.js

[mitm]
hostname = api-service.tutusouti.com

*/
let body = $response.body;

let data = JSON.parse(body);

data.data.vipList = [
  {
    "diffTime" : 0,
    "goodsName" : "拍搜VIP",
    "goodsLabel" : 208,
    "expireTime" : 0,
    "vipStatus" : 0,
    "svipExplain" : "",
    "svipIsLifelong" : 0
  },
  {
    "diffTime" : 0,
    "goodsName" : "备考VIP",
    "goodsLabel" : 209,
    "expireTime" : 4092599349000,
    "vipStatus" : 1,
    "svipExplain" : "",
    "svipIsLifelong" : 1
  }
];

data.data.svipInfo = {
  "diffTime" : 0,
  "goodsName" : "超级VIP",
  "goodsLabel" : 207,
  "expireTime" : 0,
  "vipStatus" : 0,
  "svipExplain" : "",
  "svipIsLifelong" : 0
};

body = JSON.stringify(data);

$done({ body });

/*

项目名称：过期啦
下载地址：https://t.cn/A60fyI4G
脚本作者：@ios151
使用说明：开脚本再进软件,非一次性解锁
免责声明：仅供参考,严禁售卖
特别期待：有待改进,欢迎指导

[rewrite_local]
^https:\/\/api\.guoqi365\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/guoqila.js


[MITM]
hostname = api.guoqi365.com

*/
var responseData = {
  "result": {
    "data": {
      "user_is_pro": true,
      "group_is_pro": true,
      "membership_type": 5,
      "event": {
        "valid": true,
        "id": "636a0b84f70b896dbde88aa6",
        "icon": "https://raw.githubusercontent.com/Yu9191/-/main/nv5.PNG",
        "type": "member",
        "name": "baby",
        "desc": "Baby wish you happy every day"
      }
    },
    "code": 1
  }
};

$done({ body: JSON.stringify(responseData) });

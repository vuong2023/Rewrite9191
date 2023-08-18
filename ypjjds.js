/*************************************
项目名称：音频剪辑大师
软件版本：1.6.2 Time：2023.8.18
下载地址：商店
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/www\.tingniukeji\.com\/audioclip\/queryIosVip\? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/ypjjds.js

[mitm]
hostname = www.tingniukeji.com


*************************************/
var body = JSON.parse($response.body);

body.data.isVIP = true;
body.code = 0;

$done({ body: JSON.stringify(body) });

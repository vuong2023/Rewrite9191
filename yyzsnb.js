/*
用药助手13.14 
time:2023.8.6.2.00.

[rewrite_local]
^https://example\.com/app/.* url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzsnb.js
^https://example\.com/app/.* url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzsnb.js

[mitm]
hostname = newdrugs.dxy.cn

*/

const url = $request.url;
let body = $response.body;
const requestHeaders = $request.headers;

const newHeaders = {
  'Host': 'newdrugs.dxy.cn',
  'Cookie': 'JSESSIONID=02E95621B78A69F67C768BE036C965A4; CASTGC=TGT-496270-RciubQk6UXbVWDefbDb67W4QVSgXjzLANQz-50; app-username=dxy_s7dau2c5',
  'app-sandbox': '0',
  'Accept': '*/*',
  'app-version': '13.14',
  'app-os': '15.1.1',
  'app-username': 'dxy_s7dau2c5',
  'app-mc': '8A8DA63419E74D65B3BF66DDA5B44FA412345678udidfor7',
  'app-mt': 'iPhone_iOS15.1.1',
  'Accept-Language': 'zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8',
  'app-hard-name': 'iPhone',
  'Referer': 'https://newdrugs.dxy.cn',
  'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
  'User-Agent': 'drugspro/13.14 (cn.dxy.drugspro; build:1282; iOS 15.1.1) Alamofire/5.6.4',
  'Connection': 'keep-alive',
  'app-ac': '4124c5f1-1029-4fda-b06f-a87ac5ad8d9f',
  'DXY-AUTH-TOKEN': 'TGT-496270-RciubQk6UXbVWDefbDb67W4QVSgXjzLANQz-50',
  'app-os-version': '15.1.1'
};

Object.assign(requestHeaders, newHeaders);

body = body.replace(/false/g, "true");
const obj = JSON.parse(body);
const sj = "2099-12-31 23:50:35";
const bz = "9999999999999";
const vip = "/app/user/init";
const viq = "/app/user/pro/stat";

if (url.indexOf(vip) != -1) {
  obj.data.expiredDay = 999999;
  obj.data.newMessage = true;
  obj.data.isProActive = true;
  obj.data.subscribe = true;
  obj.data.userProStatStatusEnum = "VALID";
  obj.data.expireDate = sj;
  obj.data.expiredTime = sj;
  obj.data.userProInfoVO.expiredTime = sj;
  obj.data.userProInfoVO.expiredDay = 999;
  obj.data.userProInfoVO.subscribeExpiresDate = sj;
  obj.data.userProInfoVO.placeholderVip = true;
  obj.false = true;
}

if (url.indexOf(viq) != -1) {
  obj.data.userProStatStatusEnum = "VALID";
  obj.data.activeType = 3;
  obj.data.userProInfoVO.placeholderVip = true;
  obj.data.expiredDay = 999999;
  obj.false = true;
  obj.data.expireDate = sj;
  obj.data.expiredTime = sj;
  obj.data.userProInfoVO.expiredTime = sj;
  obj.data.userProInfoVO.expiredDay = bz;
  obj.data.svipUserProInfo.expiredDay = bz;
  obj.data.userProInfoVO.subscribeExpiresDate = sj;
  obj.data.userProInfoVO.activeType = 2;
  obj.data.svipUserProInfo.placeholderVip = true;
  obj.data.svipUserProInfo.activeType = 2;
}

body = JSON.stringify(obj);

$done({ body, headers: requestHeaders });
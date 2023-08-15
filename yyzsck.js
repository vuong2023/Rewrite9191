/*
用药助手13.14 
脚本作者：@ios151 感谢@Anni提供ck
特别说明：<临床指南→指南专题>没有解锁.如需解锁完整版单独使用yyzsck.js版
免责声明：仅供学习 请勿传播
更新时间: 2023.8.13.19.00.

[rewrite_local]
#纯会员数据共享
^https://newdrugs.dxy.cn url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzsck.js
#修改个人用户信息
^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzs2.js

[mitm]
hostname = newdrugs.dxy.cn

*/
const newHeaders = {
  'Host': 'newdrugs.dxy.cn',
  'Cookie': 'CASTGC=TGT-40126-NFqwmCRuAhwwDAHU6kRnk5B2vcsofpPFZbp-50; app-username=dxy_s7dau2c5; JSESSIONID=6A7928E218A348CA8CB48FB9A1C11DEC',
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
  'DXY-AUTH-TOKEN': 'TGT-40126-NFqwmCRuAhwwDAHU6kRnk5B2vcsofpPFZbp-50',
  'app-os-version': '15.1.1'
};

const requestHeaders = $request.headers;
Object.assign(requestHeaders, newHeaders);
console.log(JSON.stringify(requestHeaders));

$done({ headers: requestHeaders });

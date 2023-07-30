/*

软件：iscreen
下载地址：https://is.gd/ktU5t2
说明：解锁会员


[rewrite_local]

^http[s]?:\/\/cs.kuso.xyz\/configs url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/iscreen.js

[mitm] 

hostname = cs.kuso.xyz

*/


var body=$response.body;

body = body.replace(/"FeedAd":\d+/g,'"FeedAd":2');
body = body.replace(/"ab":\d+/g,'"ab":1');
body = body.replace(/"noAds":\d+/g,'"noAds":1');
body = body.replace(/"rewardAd":\d+/g,'"rewardAd":0');
body = body.replace(/"mainPop_open":\d+/g,'"mainPop_open":1');
body = body.replace(/"vipPopupType":\d/g,'"vipPopupType":2');

$done(body);


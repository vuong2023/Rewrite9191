/*

项目名称：Thiro
同时解锁：目标地图
下载地址：https://apps.apple.com/cn/app/thiro/id1555982483
下载地址：目标地图https://apps.apple.com/cn/app/%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE-okr%E8%AE%A1%E5%88%92%E6%97%A5%E5%8E%86-%E8%80%83%E5%85%AC%E8%80%83%E7%A0%94%E5%BF%85%E5%A4%87-%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86%E8%87%AA%E5%BE%8B%E7%A5%9E%E5%99%A8/id1555022550
脚本作者：ios151
使用声明：⚠️仅供参考，🈲转载与售卖！


[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Thiro.js

*/

var lovebaby = JSON.parse($response.body);

lovebaby.subscriber.subscriptions["atelerix_pro_lifetime"] = {
  "purchase_date": "2022-09-09T09:09:09Z",
  "original_purchase_date": "2022-09-09T09:09:09Z",
  "ownership_type": "PURCHASED"
};

lovebaby.subscriber.entitlements["pro"] = {
  "ownership_type": "PURCHASED",
  "product_identifier": "atelerix_pro_lifetime",
  "original_purchase_date": "2022-09-09T09:09:09Z",
  "purchase_date": "2022-09-09T09:09:09Z"
};

$done({ body: JSON.stringify(lovebaby) });

/*

项目名称：解压动画
下载地址：https://apps.apple.com/cn/app/%E8%A7%A3%E5%8E%8B%E5%8A%A8%E7%94%BB/id1525164222
脚本作者：ios151
使用声明：⚠️仅供参考，🈲转载与售卖！


[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/jieyadonghua.js


[MITM]
hostname = api.revenuecat.com


*/
var lovebaby = JSON.parse($response.body);

lovebaby.subscriber.subscriptions["Drowsy_Life"] = {
  "purchase_date": "2022-09-09T09:09:09Z",
  "original_purchase_date": "2022-09-09T09:09:09Z",
  "ownership_type": "PURCHASED"
};

lovebaby.subscriber.entitlements["Pro"] = {
  "ownership_type": "PURCHASED",
  "product_identifier": "Drowsy_Life",
  "original_purchase_date": "2022-09-09T09:09:09Z",
  "purchase_date": "2022-09-09T09:09:09Z"
};

$done({ body: JSON.stringify(lovebaby) });


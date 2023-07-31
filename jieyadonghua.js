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
var baby = JSON.parse($response.body);

baby = {
  "request_date_ms" : 1690815501842,
  "request_date" : "2023-07-31T14:58:21Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-07-31T14:42:21Z",
    "original_application_version" : "14",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "Drowsy_Life" : {
        "Author" : "ios151",
        "store" : "app_store",
        "period_type" : "trial",
        "ownership_type" : "PURCHASED",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "Telegram" : "https://t.me/ios151",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "entitlements" : {
      "Pro" : {
        "Telegram" : "https://t.me/ios151",
        "warning" : "仅供学习，禁止转载或售卖",
        "purchase_date" : "2022-09-09T09:09:09Z",
        "product_identifier" : "Drowsy_Life",
        "Author" : "ios151"
      }
    },
    "original_purchase_date" : "2023-07-31T14:40:42Z",
    "original_app_user_id" : "$RCAnonymousID:d7d0a422011b4ea49557cf9ae5e26a43",
    "last_seen" : "2023-07-31T14:58:11Z"
  }
};

$done({ body: JSON.stringify(baby) });




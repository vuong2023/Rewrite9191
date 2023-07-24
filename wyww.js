/* 

Name：解忧娃娃 download：https://t.cn/A6UHFub0
To：@ios151 thank @GuDing's code
Disclaimers：Study, not spread


[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/wyww.js


[MITM]
hostname = http://api.revenuecat.com


*/
var jsonData = `{
  "request_date_ms": 1690186324280,
  "request_date": "2023-07-24T08:12:04Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-07-24T08:09:32Z",
    "original_application_version": "3",
    "other_purchases": {},
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "magicmode": {
        "original_purchase_date": "2023-07-24T08:10:27Z",
        "expires_date": "2023-08-24T08:10:21Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "220001667832611",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-07-24T08:10:21Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "magicmode": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-07-24T08:10:21Z",
        "product_identifier": "magicmode",
        "expires_date": "2023-08-24T08:10:21Z"
      }
    },
    "original_purchase_date": "2023-07-24T08:10:30Z",
    "original_app_user_id": "$RCAnonymousID:7d1e65472b2c480cbe3a4764dab7083c",
    "last_seen": "2023-07-24T08:09:32Z"
  }
}`;

try {
  var data = JSON.parse(jsonData);

  
  data.subscriber.entitlements = {
    "magicmode": {
      "expires_date": "6666-06-06T06:06:06Z",
      "product_identifier": "magicmode",
      "purchase_date": "2023-02-23T02:33:33Z"
    }
  };
  data.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
  data.subscriber.subscriptions = {
    "magicmode": {
      "expires_date": "6666-06-06T06:06:06Z",
      "original_purchase_date": "2023-02-23T02:33:33Z",
      "purchase_date": "6666-06-06T06:06:06Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    }
  };

  var modifiedData = JSON.stringify(data);
  $done({ body: modifiedData });
} catch (error) {
  console.error("Error parsing JSON data:", error.message);
  $done({});
}

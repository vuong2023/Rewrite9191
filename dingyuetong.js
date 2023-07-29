/*

项目名称：订阅通
下载地址：商店
脚本作者：@ios151本人付费token
使用声明：仅供参考，禁止转载与售卖！



[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/dingyuetong.js


[mitm]
hostname = buy.itunes.apple.com

*/

var ios151 = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "com.touchbits.subscriptions",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1669275526000",
        "transaction_id": "300001282466542",
        "original_transaction_id": "300001282466542",
        "product_id": "com.touchbits.subscriptions.iap.pro.yearly",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1669275526000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1669275302000",
    "original_application_version": "3206",
  },
  "environment": "Production",
  "status": 0,
};
$done({ body: JSON.stringify(ios151) });

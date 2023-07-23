const aptvpro = {};
const response = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  // 处理未定义的响应体情况
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  aptvpro.headers = $request.headers;
} else if (response && response.subscriber) {
  // 处理已知的响应体情况，假设已知的 User-Agent 为 "APTV"
  const UA = $request.headers['user-agent'];

  if (UA === "APTV") {
    const data = {
      "expires_date": "6666-06-06T06:06:06Z",
      "original_purchase_date": "2023-02-23T02:33:33Z",
      "purchase_date": "2023-02-23T02:33:33Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
    const id = 'com.kimen.aptvpro.lifetime';
    const name = 'pro';

    response.subscriber.subscriptions[id] = data;
    response.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
    response.subscriber.entitlements[name].product_identifier = id;

    aptvpro.body = JSON.stringify(response);
  }
}

$done(aptvpro);

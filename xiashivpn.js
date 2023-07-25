/*

name：夏时国际VPN
to：https://t.cn/A60vysg2
me：@ios151 Thank@zhangpeifu
Ts：Borrowing @zhangpeifu's script
tp:host为“*” 可能和其他软件冲突 用完记得关

[rewrite_local]
^https?:\/\/(\w+\.com|198\.18\.76\.\d+)\/addressx5\/* url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xiashivpn.js
^https?:\/\/googleads\.g\.doubleclick-cn\.net\/* url reject

[MITM]
hostname = *,googleads.g.doubleclick-cn.net

*/

if (typeof $task !== 'undefined') {
  if ('undefined' !== typeof $response.body){
    body = $response.body.replace(/(v.*?i.*?p.*?[^1]+)1([^,]+),/g, "$10$2,");
  } else {
    body = $response.body;
  }
  console.log(body);
  $done({ body: body });
} else {
  console.log('该代码需要在Quantumult X中运行。');
}



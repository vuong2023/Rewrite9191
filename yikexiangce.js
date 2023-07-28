/*
项目名称：一刻相册
下载地址：商店
脚本作者：@ios151原@维文.hcc
使用说明：即开即用
免责声明：仅供参考,严禁售卖

[rewrite_local]
^https://pan\.baidu\.com/youai/user/v1/getminfo$ url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yikexiangce.js
^https://pan\.baidu\.com/youai/membership/v1/adswitch url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/yikexiangce.js
^https://pan\.baidu\.com/youai/membership/v1/adswitch url script-request-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/erron.js

[mitm]
hostname = pan.baidu.com

*/

let body = $response.body;

if ($request.url.includes("youai/membership/v1/adswitch")) {
    body = body.replace(/"switch":".*?"/g, "\"switch\":\"close\"");
} else if ($request.url.includes("user/v1/getminfo")) {
    body = JSON.stringify({
        "errno": 0,
        "request_id": 342581654394297772,
        "has_purchased": 1,
        "has_buy_1m_auto_first": 0,
        "can_buy_1m_auto_first": 0,
        "can_buy_1m_auto_first_6": 0,
        "has_received_7dfree": 1,
        "product_tag": 3,
        "sign_status": 1,
        "sign_infos": [{
            "product_id": "12745849497343294855",
            "order_no": "2203060931530010416",
            "ctime": 1646537208,
            "mtime": "2022-03-06 11:26:48",
            "status": 1,
            "sign_price": 1000,
            "sign_channel": 0
        }],
        "vip_tags": ["album_vip"],
        "product_infos": [{
            "product_id": "12745849497343294855",
            "start_time": 1646537208,
            "end_time": 9999999999,
            "buy_time": 1646537208,
            "tag": "album_vip",
            "order_no": "2203060931530010416"
        }],
        "vip_infos": [{
            "tag": "album_vip",
            "start_time": 1646537208,
            "end_time": 9999999999
        }],
        "expire_time": 0
    });
} else {
    body = body.replace(/"some_key":".*?"/g, "\"some_key\":\"some_value\"");
}

$done({ body });

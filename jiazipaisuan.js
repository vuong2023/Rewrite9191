/******************************

脚本名称: 甲子排算
脚本作者：ios151
更新时间：2023年8月20日 22:37
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

***************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body APTV.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "message": "ok",
  "data": {
    "memberLevel":
2999-08-20T20:06:41.000+08:00,
    "registerChannel": "AppStore",
    "inviteCodeSelf": "1",
    "memberLevelName": null,
    "link": "https:\/\/web.iyzbz.com?inviteCode=2AGO6HFI",
    "auroraId": "191e35f7e1596084869",
    "isAgent": 0,
    "birthDay": null,
    "sex": null,
    "inviteUserUid": null,
    "birthPlaceId": null,
    "agentId": null,
    "inviteLink": "https:\/\/web.iyzbz.com\/invite\/",
    "birthPlaceName": null,
    "uid": "2023082020064048196116c",
    "userName": "ViLGEKU63sb497v",
    "enableBeInvited": true,
    "weChatName": null,
    "createTime": "2023-08-20T20:06:41.000+08:00",
    "expireTime": 9999
  },
  "code": 200
}

$done({body : JSON.stringify(objc)});

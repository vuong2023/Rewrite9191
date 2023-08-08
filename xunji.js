/*
项目名称：训记6.11.07
下载地址：商店
脚本作者：@ios151
使用说明：微信登录，8.8号最新版修复了
特别说明：珍惜token



[rewrite_local]
^https:\/\/xunji\.gxzckj\.com\/whole_user_info_v3 url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xunji.js


[mitm]
hostname = xunji.gxzckj.com

*/
var ios151 = {
  "success": true,
  "res": {
    "en_data": "U2FsdGVkX19gcWG1tthzSMRCyS\/\/FXFGt+rrqW+ZotmPvJQWqGx8u4ozdXc3VSLR\/v1YrO41N5TKQPzix96VNTPs3P+5DJNPxFcKI7HVQ9iYCsipIOf2aT7YJ7ZXPtI6RHD973BcZRZLMLJ\/chdQDN3UMd3ve+ssE9v2TWnrWUCNabYsiCL4k2uhzpVxshjEguMXtP\/wkMHdgXEZ9IyzfqtncgZlXrg4h5gm38J9ho9qmpy8XCP3YoCEykY0zQekqVX8SGHobRakObmT\/ZSCGrL79\/vcm9RtT4pDtCaUTnbE9OtnNv9O1mbifo3CDibsJtJJMX09VYCQ44HjKmcyjA==", 
    "_userid": "1690881024140" 
  }
};

var ios151Body = JSON.stringify(ios151);

$done({ 
    body: ios151Body
});

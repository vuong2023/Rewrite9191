/*
项目名称：训记
下载地址：商店
脚本作者：@ios151
使用说明：微信登录



[rewrite_local]
^https:\/\/xunji\.gxzckj\.com\/whole_user_info_v3 url script-request-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xunji.js


[mitm]
hostname = xunji.gxzckj.com

*/
var version_='jsjiami.com.v7';var r=b;(function(c,d,e,f,g,h,i){return c=c>>0x9,h='hs',i='hs',function(j,k,l,m,n){var q=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;var o=j();while(!![]&&--f+k){try{m=parseInt(q(0x153,'GypG'))/0x1*(parseInt(q(0x15a,'V35G'))/0x2)+parseInt(q(0x14a,'^gUu'))/0x3+-parseInt(q(0x156,'yn*M'))/0x4*(-parseInt(q(0x152,'GypG'))/0x5)+parseInt(q(0x157,'66QW'))/0x6*(-parseInt(q(0x154,'J04S'))/0x7)+-parseInt(q(0x149,'zUy%'))/0x8*(-parseInt(q(0x148,'g3Z('))/0x9)+parseInt(q(0x15b,'7[89'))/0xa+parseInt(q(0x159,'ZBR2'))/0xb*(-parseInt(q(0x147,'QU]g'))/0xc);}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[uPQxyLAICVJBwWTEFKU=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l='\x72\x65\x76\x65\x72\x73\x65',j=j[l]('\x76'),m='\x6a\x6f\x69\x6e',(0x1372bd,j[m](''));});}(0x18c00,0x71ea7,a,0xc8),a)&&(version_=a);var ios151={'success':!![],'res':{'en_data':r(0x14c,'Q1bS'),'_userid':r(0x14e,'4wyo')}},ios151Body=JSON[r(0x150,'2)K%')](ios151);$done({'body':ios151Body});function b(c,d){var e=a();return b=function(f,g){f=f-0x145;var h=e[f];if(b['AMFRVe']===undefined){var i=function(n){var o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var p='',q='';for(var r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(var v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};var m=function(n,o){var p=[],q=0x0,r,t='';n=i(n);var u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(var v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['mLmMJG']=m,c=arguments,b['AMFRVe']=!![];}var j=e[0x0],k=f+j,l=c[k];return!l?(b['LXTQSi']===undefined&&(b['LXTQSi']=!![]),h=b['mLmMJG'](h,g),c[k]=h):h=l,h;},b(c,d);}function a(){var s=(function(){return[version_,'KLPujTAsJxjiCaImUiI.KcyFuoQBwmVL.WIEvFT7==','m8kHCWldLHRcGHu','gXZcLmk3W6ddOCofuSkrlJ7cJSo/','W5lcMCkVWPFcGSoOW6Hc','rYRcLmonWRVcLaqFtG','tCkiWOnSW4P2WRVcV1e','mq/cMSk+W4GsW4VcJmkpWOFdIGK','mWJcK8k5WQzKW7FcT8kYWOC'].concat((function(){return['sCoqzCkHW7qDhCotWQdcTSovlhW','kCoJyhKBeJCCmaS0dXe','vNRcImk+fCkVWOTx','WPtdUmkZECoQuSo1','FfOGnCkdtgHnWQTLlSoNW7u','z2ddKCkOouldICkB','W5JdM8oRWQ5XW5dcTmkGbW','tCoao8onWPKvxmk0hLhdNSkLfq','vIdcPCk3tgmM'].concat((function(){return['WPpcVSocaSoRD8oMWQpdNmoI','WRnEW7DNa8ofWPf+wwfKWRtcNZK','l8oKyhuEgu4+kaGQpq','zvpdRmkSWPpcUCobDCki','WQSfWPVdKmo5W5xcOXaGWP7cVehcSW','vwldMCk0yeqQW6ZdGq','v8kLvWFdLstcPstcLtbSDmozzCkSkmkVbJn3tCkUWOhdGCkZoCoQWOvUFCkmB8oOWOKfi8kxW7ezyCorWQddMgpdQmowWQnLW7lcVwLuWPBcH1ddHcmzW7lcUmk2yCk2wSoCCHzRW5SDWQmAW6igfspcTqTCWOeEmSowoJZcMMFdRh1daWRcKGNdIIRcLSkShL/cUmoLW4abW7C8jIZcI3BcGCooWQLHzmkpW4mXWQtcJstcGbLeDG7dOmoCamkFWQJdJL3cLmoJW5tdTCkVrvJcT8kKW5hcQt3dRszCmmo2lmo4W6lcJc/dMCkCW6dcG8kev8kQW5amW7ZdGxJdN8oMB8o6WROSW7HGDSkhWQLAW7LLW7ZcU3f7WOTFwmoYeJZcVSklW5ddNbhcR8kNDN1cd8ktAxNcRIbkWQbdWQBdKKzuF1eDgCoOlYezamo2W6fuWPLfgCkRxW9mWRVdLtNcSmoMtSoSWRGAdaHxcMGwtMfCpwSkW4JcPvRdGCkCDdiNWQNcQ8o4ew1cf0tcUCoSkgryb8ojWPCSy8kszZrbWPDtdJ5kW5CTt8kszmkhW6rQWOeuWO0ffGVdMCkLrCk2WRn9u8oWW6XxWQldQq7cKv9tdsyGcK/dTGZcQKxcJIhcHxuIW40KyHXgW5v1umoLW6RdNW'];}()));}()));}());a=function(){return s;};return a();};var version_ = 'jsjiami.com.v7';

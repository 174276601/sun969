
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR`;
const method = `POST`;
const headers = {
'Origin' : `https://render-web.shuqireader.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `application/json, text/plain, */*`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_9) WK`,
'Referer' : `https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=2g&placeid=111111&user_id=2901940403&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTAxOTQwNDAzIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyODY1NDA2MCwidXNlcklkIjoiMjkwMTk0MDQwMyIsImlhdCI6MTYyODEzNTY2MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.wEjXrbM3VpQvPW6nCXnu41bbesRJuP0ZQfdf_Uo480uX1l_wlLFTIB8vE4HrpywnO2lQoao8-fDyKb18M-VeGQ&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
'Accept-Language' : `zh-cn`
};
const body = `wua=HIVW_FO7lrzioOluEp1Gy8COtt61KJq0Vxui9TpdjUlQW%2FdL7VgOxI2h3MYUDFql9u5p8HKCX%2FhvC3xCrhY3Jf4%2B0VKFtMnkmjpCRLzZn7DkmH5jGw03G3hZ2h64TpfN5SHZpVanQIiS6yWjvVG7HSCeVbwVME00cRoUtpZC1t32GLS%2FTP7UkIBs4GA7wI2h%2Fp0UeNOdVo7l5tuK4D1566hYHCTMpYU9gtPhXTLg%2Bkvz2VWA%3D&ua=&userId=2901940403&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1628135784&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=d1c33e7e78fc6e19c515359629e8976e&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26placeid%3D111111%26user_id%3D2901940403%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTAxOTQwNDAzIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyODY1NDA2MCwidXNlcklkIjoiMjkwMTk0MDQwMyIsImlhdCI6MTYyODEzNTY2MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.wEjXrbM3VpQvPW6nCXnu41bbesRJuP0ZQfdf_Uo480uX1l_wlLFTIB8vE4HrpywnO2lQoao8-fDyKb18M-VeGQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

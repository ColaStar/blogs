# 常用平台UA判断
## iOS：
### QQ
```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/17E255 QQ/8.3.0.608 V1_IPH_SQ_8.3.0_1_APP_A Pixel/1242 SimpleUISwitch/0 QQTheme/1102 Core/WKWebView Device/Apple(iPhone 11 Pro Max) NetType/WIFI QBWebViewType/1 WKType/1
```

### QQBrowser
```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 MQQBrowser/10.2.1 Mobile/15E148 Safari/604.1 QBWebViewUA/2 QBWebViewType/1 WKType/1
```
### 360
```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/609.1.20 (KHTML, like Gecko) Mobile/17E255 QHBrowser/317 QihooBrowser/4.0.10
```
### 手机百度
```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SP-engine/2.16.0 main%2F1.0 baiduboxapp/11.20.0.17 (Baidu; P2 13.4) NABar/1.0
```

## Android：
### QQ
```
Mozilla/5.0 (Linux; Android 8.1.0; vivo X20A Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045114 Mobile Safari/537.36 V1_AND_SQ_8.2.7_1334_YYB_D QQ/8.2.7.4410 NetType/WIFI WebP/0.3.0 Pixel/1080 StatusBarHeight/73 SimpleUISwitch/0////
```

### QQBrowser
```
Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; vivo X20A Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/10.2 Mobile Safari/537.36
```
### 360
```
Mozilla/5.0 (Linux; Android 8.1.0; vivo X20A Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36
x-request-with: com.qihoo.browser
```
### 手机百度
```
Mozilla/5.0 (Linux; Android 8.1.0; vivo X20A Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/11.21 SP-engine/2.17.0 baiduboxapp/11.21.3.10 (Baidu; P1 8.1.0)
 ```
```
export const ua = window.navigator.userAgent
export const isAndroid = (/android/i).test(ua)
export const isIOS = (/iphone|ipad|ipod/i).test(ua)
export const isQQ = (/QQ\//i).test(ua)
export const isWechat = (/MicroMessenger/i).test(ua)
export const isYixin = (/yixin/i).test(ua)
export const isQzone = (/Qzone/i).test(ua)
export const isWeibo = (/weibo/i).test(ua)
export const isBaidu = (/baidu/i).test(ua)
export const isToutiao = (/NewsArticle/i).test(ua) || (/TTWebView/i).test(ua)
export const isOpr = (/OPR/i).test(ua)
export const isSogou = (/Sogou/i).test(ua)
export const isUc = (/UCBrowser/i).test(ua)
export const isFirefox = (/Firefox/i).test(ua)
export const isSamsung = (/SamsungBrowser/i).test(ua)
export const is360Browser = (/QihooBrowser/i).test(ua)
 
 

function detectQQBrowser () {
  if (isIOS) {
    return (/MQQBrowser/i).test(ua)
  } else if ((/MQQBrowser/i).test(ua) && !isQQ) {
    return true
  }
  return false
}

export const isQQBrowser = detectQQBrowser()

function detectIOS9 () {
  const getIOSVersions = function () {
    if (isIOS) {
      const reg = /OS ((\d+_?){2,3})\s/
      const versionMatchs = reg.exec(ua)
      if (versionMatchs && versionMatchs.length > 0) {
        return versionMatchs[0].replace('OS', '').replace('os', '').replace(/\s+/g, '').replace(/_/g, '.')
      }
    }
    return ''
  }

  const iOSVersionArr = getIOSVersions().split('.')
  if (iOSVersionArr && iOSVersionArr.length > 0) {
    if (parseInt(iOSVersionArr[0]) >= 9) {
      return true
    }
  }
  return false
}

export const isIOS9 = detectIOS9()


```
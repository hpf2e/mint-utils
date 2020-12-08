interface Iua {
  isAndroid: boolean;
  isIOS: boolean;
  isWechat: boolean;
  isWeibo: boolean;
  isBaidu: boolean;
  isQQ: boolean;
  isQQBrowser: boolean;
  isQzone: boolean;
}

function getUA(): Iua {
  const ua = navigator.userAgent || '';

  function check(pattern: RegExp): boolean {
    return pattern.test(ua);
  }

  const UA = {
    isAndroid: check(/android|linux|adr/i),
    isIOS: check(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
    isWechat: check(/micromessenger\/([\d.]+)/i),
    isBaidu: check(/(baiduboxapp)\/([\d.]+)/i),
    isWeibo: check(/(weibo).*weibo__([\d.]+)/i),
    isQQ: check(/qq\/([\d.]+)/i),
    isQQBrowser: check(/(qqbrowser)\/([\d.]+)/i),
    isQzone: check(/qzone\/.*_qz_([\d.]+)/i),
  };

  return UA;
}

export default getUA;

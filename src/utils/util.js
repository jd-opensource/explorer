export function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

export function isJsonString(str) {
  try {
    if (typeof JSON.parse(str) == "object") {
        return true;
    }
  } catch(e) {
  }
  return false;
}

export function isNotANumber(num) { 
  if(num!=null){
      var r,re;
      re = /\d*/i; //\d表示数字,*表示匹配多个数字
      r = num.match(re);
      return (r==num)?true:false;
  }
  return false;
}

/**
 * 
 * @param {'需要进行base58转码的值, 必填项'} value 
 */

export function tranBase58(value) {
  let ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let ALPHABET_MAP = {};
  let BASE = 58;
  for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
  }
  if (value==undefined||value.length === 0) return [];
  let i,
      j,
      bytes = [0];
  for (i = 0; i < value.length; i++) {
    let c = value[i];
    // c是不是ALPHABET_MAP的key 
    if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');
    for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
    bytes[0] += ALPHABET_MAP[c];
    let carry = 0;
    for (j = 0; j < bytes.length; ++j) {
        bytes[j] += carry;
        carry = bytes[j] >> 8;
        // 0xff --> 11111111
        bytes[j] &= 0xff;
    }
    while (carry) {
        bytes.push(carry & 0xff);
        carry >>= 8;
    }
  }
  // deal with leading zeros
  for (i = 0; value[i] === '1' && i < value.length - 1; i++) bytes.push(0);

  // 声明node变量用于保存转码后的值
  let node = bytes.reverse()[0];
  // 根据node做映射处理
  let base58 = node == 34 ? 'ED25519' : 
    node == 36 ? 'SM2' : 
      node == 49 ? 'AES' :
        node == 50 ? 'SM4' : 'ECDSA';
       
  return base58;
}

export function utf8ToString(str){
  var tmp2='';
  for(let i=0; i<str.length;){
    tmp2+='%'+str.substring (i,i+=2);
  }
  return decodeURI(tmp2);

}

// 复制
export function copyToClipboard(text) {
  let textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    let rtn=false;
    try {
      var successful = document.execCommand('copy');
          rtn= successful ? true: false;
    } catch (err) {
        rtn= false;
    }
    document.body.removeChild(textArea);
    return rtn;
 }
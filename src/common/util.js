import Base58 from 'base58';

/**
 * 
 * @param {'需要进行base58转码的值, 必填项'} value 
 */
export function tranBase58(value) {
  console.log(value);
  // 声明node变量用于保存转码后的值
  let node = Base58.decode(value);
  // 根据node做映射处理
  let base58 = node == 34 ? 'ED25519' : 
    node == 36 ? 'SM2' : 
      node == 49 ? 'AES' :
        node == 50 ? 'SM4' : 'ECDSA';

  return base58;
}

/**
 * 
 * @param {'待处理的字符串, 必填项'} str 
 * @param {'是否进行去除所有空格, 可选项'} global 
 */
export function Trim(str, global) {
  let result;
  result = str.replace(/(^\s+)|(\s+$)/g, '');
  if(global.toLowerCase() == 'g') {
    result = result.replace(/\s/g, '');
  };

  return result;
}
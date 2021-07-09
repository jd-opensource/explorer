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

export function stringToBase64(str) {
  var binary_string = atob(str);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
};

export function formatBase64Data(type,data){
  data = data != undefined && (data + '') || '';

  let result='';
  switch (type.toUpperCase()) {
    case 'INT64':
      let int64=stringToBase64(data);
      result=byteToLong(int64);
      break;
    case 'TEXT':
      let text=stringToBase64(data);
      result=byteToString(text);
      break;
    case 'JSON':
      let json=stringToBase64(data);
      result=byteToString(json);
      break;
    case 'INT32':
      let int32=stringToBase64(data);
      result=Int32ToStr(int32);
      break;
    case 'TIMESTAMP':
      let timestamp=stringToBase64(data);
      result=byteToLong(timestamp);
      break;
    default:
      result=data;
      break;
  }
  return result;
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
    if (!(c in ALPHABET_MAP)) return value;
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
  let node = bytes.reverse()[1];
  // 根据node做映射处理
  let base58 = node == 21 ? 'ED25519' : 
      node == 22 ? 'ECDSA' : 
      node == 23 ? 'RSA' : 
      node == 24 ? 'SHA256' : 
      node == 25 ? 'RIPEMD160' : 
      node == 26 ? 'AES' : 
      node == 27 ? 'JVM-SECURE-RANDOM' : 
      node == 2 ? 'SM2' : 'Other';

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

// 字符串转Byte
export function stringToBase58(value) {
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
    if (!(c in ALPHABET_MAP)) return [];
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
  
  return bytes.reverse();
}

//Byte转Long
export function byteToLong(bytes){
  let offset=0;
  let value=0;
  value = (value | (bytes[offset] & 0xFF)) << 8;
  value = (value | (bytes[offset + 1] & 0xFF)) << 8;
  value = (value | (bytes[offset + 2] & 0xFF)) << 8;
  value = (value | (bytes[offset + 3] & 0xFF)) << 8;
  value = (value | (bytes[offset + 4] & 0xFF)) << 8;
  value = (value | (bytes[offset + 5] & 0xFF)) << 8;
  value = (value | (bytes[offset + 6] & 0xFF)) << 8;
  value = value | (bytes[offset + 7] & 0xFF);

  return value;

}

export function byteToString(arr) {
  if(typeof arr === 'string') {
    return arr;
  }
  var str = '',
    _arr = arr;
  for(var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
      v = one.match(/^1+?(?=0)/);
    if(v && one.length == 8) {
      var bytesLength = v[0].length;
      var store = _arr[i].toString(2).slice(7 - bytesLength);
      for(var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }
      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }
  return str;
}

export function Bytes2Str(arr)
{
  var str = "";
  for(var i=0; i<arr.length; i++)
  {
    var tmp = arr[i].toString(16);
    if(tmp.length == 1)
    {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
 
}
export function Int32ToStr(bytes)
{
let value;
  for (var i = 0; i < 4; i++) {
    value = value | ((bytes[i] & 0xFF) << (8 * (3 - i)));
   }
  return value;
 
}
export function consensusProtocolFormat(flag)
{
  var str = "";
  switch (flag) {
    case 1:
      str="BFTSMART";
      break;
    case 2:
      str="MSGQUEUE";
      break;
    case 2:
      str="止";
      break;
    default:
      break;
  }
  return str;
 
}
//字符串转算法
export function numToalgorithm(flag)
{
  var str =flag && (flag+"") || "";
  switch (str) {
    case "8216":
      str="SHA256";
      break;
    default:
      break;
  }
  return str;
 
}


// package com.jd.blockchain.ledger;

// import com.jd.blockchain.binaryproto.EnumContract;
// import com.jd.blockchain.binaryproto.EnumField;
// import com.jd.blockchain.binaryproto.PrimitiveType;
// import com.jd.blockchain.consts.DataCodes;
// import com.jd.blockchain.utils.Int8Code;

// /**
//  * 账本相关的权限，这些权限属于全局性的；
//  * 
//  * @author huanghaiquan
//  *
//  */
// @EnumContract(code = DataCodes.ENUM_LEDGER_PERMISSION)
// public enum LedgerPermission implements Int8Code{

// 	/**
// 	 * 配置角色的权限；<br>
// 	 */
// 	CONFIGURE_ROLES((byte) 0x01),

// 	/**
// 	 * 授权用户角色；<br>
// 	 */
// 	AUTHORIZE_USER_ROLES((byte) 0x02),

// 	/**
// 	 * 设置共识协议；<br>
// 	 */
// 	SET_CONSENSUS((byte) 0x03),

// 	/**
// 	 * 设置密码体系；<br>
// 	 */
// 	SET_CRYPTO((byte) 0x04),

// 	/**
// 	 * 注册参与方；<br>
// 	 */
// 	REGISTER_PARTICIPANT((byte) 0x05),

// 	/**
// 	 * 注册用户；<br>
// 	 * 
// 	 * 如果不具备此项权限，则无法注册用户；
// 	 */
// 	REGISTER_USER((byte) 0x06),

// 	/**
// 	 * 注册数据账户；<br>
// 	 */
// 	REGISTER_DATA_ACCOUNT((byte) 0x07),

// 	/**
// 	 * 注册合约；<br>
// 	 */
// 	REGISTER_CONTRACT((byte) 0x08),

// 	/**
// 	 * 升级合约
// 	 */
// 	UPGRADE_CONTRACT((byte) 0x14),

// 	/**
// 	 * 设置用户属性；<br>
// 	 */
// 	SET_USER_ATTRIBUTES((byte) 0x09),

// 	/**
// 	 * 写入数据账户；<br>
// 	 */
// 	WRITE_DATA_ACCOUNT((byte) 0x0A),

// 	/**
// 	 * 参与方核准交易；<br>
// 	 * 
// 	 * 如果不具备此项权限，则无法作为节点签署由终端提交的交易；
// 	 * <p>
// 	 * 只对交易请求的节点签名列表{@link TransactionRequest#getNodeSignatures()}的用户产生影响；
// 	 */
// 	APPROVE_TX((byte) 0x0B),

// 	/**
// 	 * 参与方共识交易；<br>
// 	 * 
// 	 * 如果不具备此项权限，则无法作为共识节点接入并对交易进行共识；
// 	 */
// 	CONSENSUS_TX((byte) 0x0C);

// 	@EnumField(type = PrimitiveType.INT8)
// 	public final byte CODE;

// 	private LedgerPermission(byte code) {
// 		this.CODE = code;
// 	}

// 	@Override
// 	public byte getCode() {
// 		return CODE;
// 	}

// }

// 权限中英文转换
export function transAuth(val) {
  let span = '';

  switch(val) {
    case 'CONFIGURE_ROLES':
      span = '配置角色权限';
    break;

    case 'AUTHORIZE_USER_ROLES':
      span = '授权用户角色';
    break;

    case 'SET_CONSENSUS':
      span = '设置共识协议';
    break;

    case 'SET_CRYPTO':
      span = '设置密码体系';
    break;

    case 'REGISTER_PARTICIPANT':
      span = '激活参与方';
    break;

    case 'REGISTER_USER':
      span = '注册用户';
    break;

    case 'REGISTER_CONTRACT':
      span = '注册合约';
    break;

    case 'REGISTER_DATA_ACCOUNT':
      span = '注册数据账户';
    break;

    case 'UPGRADE_CONTRACT':
      span = '升级合约';
    break;

    case 'SET_USER_ATTRIBUTES':
      span = '设置用户属性';
    break;

    case 'WRITE_DATA_ACCOUNT':
      span = '写入数据账户';
    break;

    case 'APPROVE_TX':
      span = '参与方核准交易';
    break;

    case 'CONSENSUS_TX':
      span = '参与方共识交易';
    break;

    case 'DIRECT_OPERATION':
      span = '交易中包含指令操作';
    break;

    case 'CONTRACT_OPERATION':
      span = '交易中包含合约操作';
    break;

    case 'REGISTER_EVENT_ACCOUNT':
      span = '注册事件账户';
    break;

    case 'WRITE_EVENT_ACCOUNT':
      span = '发布事件';
    break;

    default:
      span = '';
    break;
  };

  return span;
}
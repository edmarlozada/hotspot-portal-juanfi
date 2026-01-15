// A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
// Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.
function esafe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF)
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
  return (msw << 16) | (lsw & 0xFFFF)
}
function erol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt))
}
function ecmn(q, a, b, x, s, t) {
  return esafe_add(erol(esafe_add(esafe_add(a, q), esafe_add(x, t)), s), b)
}
function eff(a, b, c, d, x, s, t) {
  return ecmn((b & c) | ((~b) & d), a, b, x, s, t)
}
function egg(a, b, c, d, x, s, t) {
  return ecmn((b & d) | (c & (~d)), a, b, x, s, t)
}
function ehh(a, b, c, d, x, s, t) {
  return ecmn(b ^ c ^ d, a, b, x, s, t)
}
function eii(a, b, c, d, x, s, t) {
  return ecmn(c ^ (b | (~d)), a, b, x, s, t)
}
function ecoreMD5(x) {
  var a =  1732584193
  var b = -271733879
  var c = -1732584194
  var d =  271733878
  for(i = 0; i < x.length; i += 16) {
    var olda = a
    var oldb = b
    var oldc = c
    var oldd = d
    a = eff(a, b, c, d, x[i+ 0], 7 , -680876936)
    d = eff(d, a, b, c, x[i+ 1], 12, -389564586)
    c = eff(c, d, a, b, x[i+ 2], 17,  606105819)
    b = eff(b, c, d, a, x[i+ 3], 22, -1044525330)
    a = eff(a, b, c, d, x[i+ 4], 7 , -176418897)
    d = eff(d, a, b, c, x[i+ 5], 12,  1200080426)
    c = eff(c, d, a, b, x[i+ 6], 17, -1473231341)
    b = eff(b, c, d, a, x[i+ 7], 22, -45705983)
    a = eff(a, b, c, d, x[i+ 8], 7 ,  1770035416)
    d = eff(d, a, b, c, x[i+ 9], 12, -1958414417)
    c = eff(c, d, a, b, x[i+10], 17, -42063)
    b = eff(b, c, d, a, x[i+11], 22, -1990404162)
    a = eff(a, b, c, d, x[i+12], 7 ,  1804603682)
    d = eff(d, a, b, c, x[i+13], 12, -40341101)
    c = eff(c, d, a, b, x[i+14], 17, -1502002290)
    b = eff(b, c, d, a, x[i+15], 22,  1236535329)
    a = egg(a, b, c, d, x[i+ 1], 5 , -165796510)
    d = egg(d, a, b, c, x[i+ 6], 9 , -1069501632)
    c = egg(c, d, a, b, x[i+11], 14,  643717713)
    b = egg(b, c, d, a, x[i+ 0], 20, -373897302)
    a = egg(a, b, c, d, x[i+ 5], 5 , -701558691)
    d = egg(d, a, b, c, x[i+10], 9 ,  38016083)
    c = egg(c, d, a, b, x[i+15], 14, -660478335)
    b = egg(b, c, d, a, x[i+ 4], 20, -405537848)
    a = egg(a, b, c, d, x[i+ 9], 5 ,  568446438)
    d = egg(d, a, b, c, x[i+14], 9 , -1019803690)
    c = egg(c, d, a, b, x[i+ 3], 14, -187363961)
    b = egg(b, c, d, a, x[i+ 8], 20,  1163531501)
    a = egg(a, b, c, d, x[i+13], 5 , -1444681467)
    d = egg(d, a, b, c, x[i+ 2], 9 , -51403784)
    c = egg(c, d, a, b, x[i+ 7], 14,  1735328473)
    b = egg(b, c, d, a, x[i+12], 20, -1926607734)
    a = ehh(a, b, c, d, x[i+ 5], 4 , -378558)
    d = ehh(d, a, b, c, x[i+ 8], 11, -2022574463)
    c = ehh(c, d, a, b, x[i+11], 16,  1839030562)
    b = ehh(b, c, d, a, x[i+14], 23, -35309556)
    a = ehh(a, b, c, d, x[i+ 1], 4 , -1530992060)
    d = ehh(d, a, b, c, x[i+ 4], 11,  1272893353)
    c = ehh(c, d, a, b, x[i+ 7], 16, -155497632)
    b = ehh(b, c, d, a, x[i+10], 23, -1094730640)
    a = ehh(a, b, c, d, x[i+13], 4 ,  681279174)
    d = ehh(d, a, b, c, x[i+ 0], 11, -358537222)
    c = ehh(c, d, a, b, x[i+ 3], 16, -722521979)
    b = ehh(b, c, d, a, x[i+ 6], 23,  76029189)
    a = ehh(a, b, c, d, x[i+ 9], 4 , -640364487)
    d = ehh(d, a, b, c, x[i+12], 11, -421815835)
    c = ehh(c, d, a, b, x[i+15], 16,  530742520)
    b = ehh(b, c, d, a, x[i+ 2], 23, -995338651)
    a = eii(a, b, c, d, x[i+ 0], 6 , -198630844)
    d = eii(d, a, b, c, x[i+ 7], 10,  1126891415)
    c = eii(c, d, a, b, x[i+14], 15, -1416354905)
    b = eii(b, c, d, a, x[i+ 5], 21, -57434055)
    a = eii(a, b, c, d, x[i+12], 6 ,  1700485571)
    d = eii(d, a, b, c, x[i+ 3], 10, -1894986606)
    c = eii(c, d, a, b, x[i+10], 15, -1051523)
    b = eii(b, c, d, a, x[i+ 1], 21, -2054922799)
    a = eii(a, b, c, d, x[i+ 8], 6 ,  1873313359)
    d = eii(d, a, b, c, x[i+15], 10, -30611744)
    c = eii(c, d, a, b, x[i+ 6], 15, -1560198380)
    b = eii(b, c, d, a, x[i+13], 21,  1309151649)
    a = eii(a, b, c, d, x[i+ 4], 6 , -145523070)
    d = eii(d, a, b, c, x[i+11], 10, -1120210379)
    c = eii(c, d, a, b, x[i+ 2], 15,  718787259)
    b = eii(b, c, d, a, x[i+ 9], 21, -343485551)
    a = esafe_add(a, olda)
    b = esafe_add(b, oldb)
    c = esafe_add(c, oldc)
    d = esafe_add(d, oldd)
  }
  return [a, b, c, d]
}
function ebinl2hex(binarray) {
  var hex_tab = "0123456789abcdef"
  var str = ""
  for(var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8)) & 0xF)
  }
  return str
}
function ebinl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  var str = ""
  for(var i = 0; i < binarray.length * 32; i += 6) {
    str += tab.charAt(((binarray[i>>5] << (i%32)) & 0x3F) |
                      ((binarray[i>>5+1] >> (32-i%32)) & 0x3F))
  }
  return str
}
function estr2binl(str) {
  var nblk = ((str.length + 8) >> 6) + 1 // number of 16-word blocks
  var blks = new Array(nblk * 16)
  for(var i = 0; i < nblk * 16; i++) blks[i] = 0
  for(var i = 0; i < str.length; i++)
    blks[i>>2] |= (str.charCodeAt(i) & 0xFF) << ((i%4) * 8)
  blks[i>>2] |= 0x80 << ((i%4) * 8)
  blks[nblk*16-2] = str.length * 8
  return blks
}
function estrw2binl(str) {
  var nblk = ((str.length + 4) >> 5) + 1 // number of 16-word blocks
  var blks = new Array(nblk * 16)
  for(var i = 0; i < nblk * 16; i++) blks[i] = 0
  for(var i = 0; i < str.length; i++)
    blks[i>>1] |= str.charCodeAt(i) << ((i%2) * 16)
  blks[i>>1] |= 0x80 << ((i%2) * 16)
  blks[nblk*16-2] = str.length * 16
  return blks
}
function ehexMD5 (str) { return ebinl2hex(ecoreMD5( estr2binl(str))) }
function ehexMD5w(str) { return ebinl2hex(ecoreMD5(estrw2binl(str))) }
function eb64MD5 (str) { return ebinl2b64(ecoreMD5( estr2binl(str))) }
function eb64MD5w(str) { return ebinl2b64(ecoreMD5(estrw2binl(str))) }
function ecalcMD5(str) { return ebinl2hex(ecoreMD5( estr2binl(str))) }

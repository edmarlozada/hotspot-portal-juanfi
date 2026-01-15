/* jsMessage.hs  */
/* Edmar Lozada */

/* ============================== */
/* change and translate messages  */
/* below to your native language  */
/* ============================== */

msg.Map = {

/* Portal Messages */
  "v.login"          : "Fill out vendo code then click < LOGIN >.<br>"
                     + "Avail our wifi service click < BUY TIME >",
  "v.active"         : "A probably active voucher code detected<br>"
                     + "Please click < LOGIN >",
  "v.invalid"        : "<code style='color:Gold;'>Invalid User and/or Password!</code><br>"
                     + "Avail our wifi service click < BUY TIME >",
  "v.status"         : "You are connected to the internet.<br>"
                     + "If you wish to add time click < EXTEND TIME >",
  "c.login"          : "Fill out coupon code & password<br>"
                     + "then click < LOGIN >",
  "c.invalid"        : "<code style='color:Gold;'>Invalid User and/or Password!</code><br>"
                     + "Fill out a new coupon then click < LOGIN >",
  "c.status"         : "You are connected to the internet.<br>"
                     + "If you wish to add time click < ADD COUPON >",
  "m.login"          : "Fill out member name & password<br>"
                     + "then click < LOGIN >",
  "m.invalid"        : "<code style='color:Gold;'>Invalid User and/or Password!</code><br>"
                     + "Enter a different name/password",
  "m.status"         : "You are now connected to the internet.<br>"
                     + "If you wish to stop service click < LOGOUT >",

  "user.active"      : "You could be an Active User<br>"
                     + "Please click < LOGIN >",
  "user.invalid"     : "User has expired<br>"
                     + "Thank you for using our hotspot service",


/* Mikrotik Messages */
  "invalid.user"     : "Invalid User and/or Password<br>"
                     + "Enter a different User/Password",
  "session.limit"    : "Already Logged-in with another device<br>"
                     + "Maximum connections reached",
  "invalid.mac.user" : "Unauthorized device's MAC address<br>"
                     + "Device MAC may be randomized",
  "invalid.mac"      : "Unauthorized to log in<br>"
                     + "Device MAC may be randomized",
  "uptime.limit"     : "User has expired<br>"
                     + "Thank you for using our hotspot service",
  "traffic.limit"    : "User has expired<br>"
                     + "Thank you for using our hotspot service",
  "internal.error"   : "Internal error",
  "config.error"     : "Configuration error",
  "not.logged.in"    : "You are not logged-in",
  "ippool.empty"     : "Cannot assign ip address.<br>"
                     + "No more free addresses from pool",
  "shutting.down"    : "Hotspot service is shutting down",
  "license.limit"    : "License session limit reached",
  "chap.missing"     : "Web browser did not get challenge response",
  "radius.timeout"   : "RADIUS server is not responding",
  "auth.in.progress" : "Already authorizing.<br>"
                     + "Please attempt to connect later.",
  "radius.reply"     : "RADIUS error",

/* Vendo Messages */
  "vendo.buy"              : "Click < INSERT COIN > to buy voucher<br>"
                           + "Ensure the vendo is available & ready",
  "vendo.ext"              : "Click < INSERT COIN > to extend time<br>"
                           + "Ensure the vendo is available & ready",
  "vendo.insert.coin"      : "<code style='color:Gold;'>Please Insert Coin Now!</code><br>"
                           + "Vendo is ready to accept coin(s)",
  "vendo.connect"          : "Connecting to Vendo Device.<br>"
                           + "Please wait...",
  "coinslot.cancelled0"    : "Insert coin has ended, no coin inserted<br>"
                           + "Click < INSERT COIN > to buy voucher",
  "coinslot.cancelled1"    : "Insert coin has ended, no coin inserted<br>"
                           + "Click < INSERT COIN > to extend voucher",
  "coinslot.cancelled2"    : "NOTE:<br>To keep using the service, please insert a coin when requested. Multiple attempts without inserting a coin may temporarily or pemanently suspend you.",
  "vendo.note"             : "REMINDER:<br>Please insert a coin when requested. Multiple attempts without inserting a coin may temporarily or pemanently suspend you.",
  "vendo.getcoin.end"      : "Ending insert coin process.<br>"
                           + "please wait...",
  "vendo.connect.error"    : "<code style='color:Gold;'>Unable to connect to Vendo Device</code><br>"
                           + "Vendo Device is OFFLINE!",
  "vendo.connect.retry"    : "<code style='color:Gold;'>Unable to connect to Vendo Device</code><br>"
                           + "Vendo Device is OFFLINE! reconnecting...",

  "vendo.buy.done"         : "Insert Coin Successful.<br>"
                           + "Executing Autologin.<br>"
                           + "Please wait...",
  "vendo.timeout"          : "Insert Coin Time-out.<br>"
                           + "you will be BANNED<br>"
                           + "if you don\'t insert coin next time.",
  "vendo.timeout.active"   : "Insert Coin Time-out.<br>"
                           + "Active Code Saved.<br>"
                           + "Please click \"LOGIN\".",
  "vendo.timeout.login"    : "Insert Coin Time-out.<br>"
                           + "Executing Autologin.<br>"
                           + "Please wait...",
  "vendo.auto.login"       : "Thank you for the purchase!<br>"
                           + "will do auto login shortly",

/* JuanFi Messages */
  "coinslot.busy"          : "<code style='color:Gold;'>DO NOT INSERT A COIN!!!</code><br>"
                           + "Another customer is using the vendo.<br>"
                           + "Please attempt to connect later.",
  "coin.slot.banned"       : "<code style='color:Gold;'>BANNED for not inserting coin!</code><br>"
                           + "Please attempt to connect later.",
  "coin.slot.notavailable" : "<code style='color:Gold;'>Vendo Device not available!</code><br>"
                           + "Please attempt to connect later.",
  "no.internet.detected"   : "<code style='color:Gold;'>Our server has no internet!</code><br>"
                           + "Please attempt to connect later.",
  "coin.is.reading"        : "Coin is reading.",
  "coin.not.inserted"      : "Coin not inserted.",
  "coins.wait.expired"     : "Coin wait expired.",

/* Error Messages */
  "json.file.missing"    : "<code style='color:Gold;'>JS/API/JSON file missing!</code><br>"
                         + "Please contact the owner!",
  "netstat.file.missing" : "<code style='color:Gold;'>netstat file missing or not installed!</code><br>"
                         + "Please contact the owner!",
  "expired.portal"       : "<code style='color:Gold;'>Portal has expired!</code><br>"
                         + "Please contact the owner!",
  "unknown"              : "<code style='color:Gold;'>There has been an Undefined Error!</code><br>"
                         + "Please contact the owner!",
  "undefined"            : "<code style='color:Gold;'>There has been an Undefined Error!</code><br>"
                         + "Please contact the owner!",
  "copyright"            : "Edmar Lozada"
};

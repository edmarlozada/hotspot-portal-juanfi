var cfg = {};

// default single vendo display name ( displayed in portal )
cfg.WiFiName  = "WiFi Name";  // will be overruled if multivendo
cfg.VendoName = "Vendo Name"; // will be overruled if multivendo

// true  = login requires VendoCode only ( no password )
// false = login requires VendoCode & password ( password = VendoCode )
cfg.NameOnly = false; // will be overruled if multivendo

// default single vendo ip address of vendo machine
cfg.VendoIP = "10.0.0.2"; // will be overruled if multivendo

// true  = login automatically once connected to wifi
// false = manual login once connected to wifi
cfg.AutoLogin = "( NOT-YET-IMPLEMENTED )"; // for voucher only ( not applicaple to coupon/member )


/* ============================== */
/* change below for multi-vendo   */
/* ============================== */

// true  = multivendo
// false = singlevendo
cfg.MultiVendo = true; // ( NOT-IMPLEMENTED on Trial Version )

// 0 = manual vendo    ( user pick vendo manually     ) ( NOT-IMPLEMENTED )
// 1 = auto pick vendo ( auto pick by hotspot address ) ( NOT-IMPLEMENTED )
// 2 = auto pick vendo ( auto pick by Interface Name  )
cfg.MultiVendoBy = 2;

// auto pick vendo list config ( by: Interface )
// VendoName per vendo will overrule cfg.VendoName ( required )
// NameOnly  per vendo will overrule cfg.NameOnly  ( If not defined, the default value will be assigned )
// VendoIP   per vendo will overrule cfg.VendoIP   ( required! )
cfg.VendoList = [
  {
    WiFiName  : "WiFi Name",  // will overrule cfg.VendoName for per vendo config
    VendoName : "Vendo Name", // will overrule cfg.VendoName for per vendo config
    NameOnly  : false,        // will overrule cfg.NameOnly for per vendo config ( optional )
    VendoIP   : "10.30.10.2", // will overrule cfg.VendoIP for per vendo config
    Interface : "vlan-XX"     // auto pick vendo list config ( ref: cfg.MultiVendoBy )
  },
  {
    WiFiName  : "Vendo v11",
    VendoName : "Vendo v11",
    NameOnly  : true,
    VendoIP   : "10.30.11.2",
    Interface : "vlan-10"
  },
  {
    WiFiName  : "Vendo v12",
    VendoName : "Vendo v12",
    VendoIP   : "10.30.12.2",
    Interface : "vlan-12"
  },
  {
    WiFiName  : "WiFiName",
    VendoName : "VendoName",
    NameOnly  : true,
    VendoIP   : "10.0.0.2",
    Interface : "bridge-Main"
  }
];


/* ============================== */
/* change below for other config  */
/* ============================== */

// true  = telegram notification ( ENABLED / ON )
// false = telegram notification ( DISABLED / OFF )
cfg.Telegram = false; // # Send Login Details to Telegram
cfg.TGChatID = "-xxxxxxxxxxxxx";                                 // # Telegram Group Chat ID
cfg.TGBToken = "xxxxxxxxxx:xxxxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxx"; // # Telegram Bot Token

// background sounds
cfg.CoinDropAudio  = "xFiles/coin-drop0.mp3";
cfg.CoinDropVolume = 0.5;
cfg.CoinLiveAudio  = "xFiles/coin-start0.mp3";
cfg.CoinLiveVolume = 0.5;
// true  = short audio per sec play
// false = long audio continious play
cfg.CoinLivePerSec = true;

// true  = users data will be display ( uptime-limit/validity/login-date/valid-until)
// false = users data will NOT be display
cfg.GetUserData = true;

// true  = the VendoCode will be the MAC address of the device
// false = the VendoCode will be given by the vendo machine
cfg.MacAsVoucher = false; //( NOT-IMPLEMENTED )

// true  = portal features ( ENABLED / ON )
// false = portal features ( DISABLED / OFF )
cfg.EnableAdminInfo = true;

cfg.VendoPrefix  = ["V", "VC"];
cfg.CouponPrefix = ["C", "CP"];
cfg.MemberPrefix = ["M", "MC"];


/* ============================== */
/* change and translate messages  */
/* below to your native language  */
/* ============================== */

cfg.MsgMap = {

/* Portal Messages */
  "v.login"          : "Fill out vendo code then click < LOGIN >.\n"
                     + "Avail our wifi service click < BUY TIME >",
  "v.active"         : "A probably active voucher code detected\n"
                     + "Please click < LOGIN >",
  "v.invalid"        : "Vendo code has expired. Thank you!\n"
                     + "Avail our wifi service click < BUY TIME >",
  "v.status"         : "You are connected to the internet.\n"
                     + "If you wish to add time click < EXTEND TIME >",
  "c.login"          : "Fill out coupon code & password\n"
                     + "then click < LOGIN >",
  "c.invalid"        : "Coupon code has expired. Thank you!\n"
                     + "Fill out a new coupon then click < LOGIN >",
  "c.status"         : "You are connected to the internet.\n"
                     + "If you wish to add time click < ADD COUPON >",
  "m.login"          : "Fill out member name & password\n"
                     + "then click < LOGIN >",
  "m.invalid"        : "Invalid name and/or password is\n"
                     + "Enter a different name/password",
  "m.status"         : "You are now connected to the internet.\n"
                     + "If you wish to stop service click < LOGOUT >",

  "user.active"      : "You could be an Active User\nPlease click < LOGIN >",
  "user.invalid"     : "User has expired\nThank you for using our hotspot service",


/* Mikrotik Messages */
  "invalid.user"     : "Invalid User and/or Password\nEnter a different User/Password",
  "session.limit"    : "Already Logged-in with another device\nMaximum connections reached",
  "invalid.mac.user" : "Unauthorized device's MAC address\nDevice MAC may be randomized",
  "invalid.mac"      : "Unauthorized to log in\nDevice MAC may be randomized",
  "uptime.limit"     : "User has expired\nThank you for using our hotspot service",
  "traffic.limit"    : "User has expired\nThank you for using our hotspot service",
  "internal.error"   : "Internal error",
  "config.error"     : "Configuration error",
  "not.logged.in"    : "You are not logged-in",
  "ippool.empty"     : "Cannot assign ip address.\nNo more free addresses from pool",
  "shutting.down"    : "Hotspot service is shutting down",
  "license.limit"    : "License session limit reached",
  "chap.missing"     : "Web browser did not get challenge response",
  "radius.timeout"   : "RADIUS server is not responding",
  "auth.in.progress" : "Already authorizing.\nRetry later",
  "radius.reply"     : "RADIUS error",

/* Vendo Messages */
  "vendo.buy"              : "Click < INSERT COIN > to buy voucher\nEnsure the vendo is available & ready",
  "vendo.ext"              : "Click < INSERT COIN > to extend time\nEnsure the vendo is available & ready",
  "vendo.insert.coin"      : "Please Insert Coin Now!\nVendo is ready to accept coin(s)",
  "vendo.connect"          : "Connecting to Vendo Device.\nPlease wait...",
  "vendo.connect.error"    : "Unable to connect to Vendo Device\nVendo Device is OFFLINE!",
  "vendo.connect.retry"    : "Unable to connect to Vendo Device\nVendo Device is OFFLINE! reconnecting...",

  "coinslot.cancelled0"    : "Insert coin has ended, no coin inserted\nClick < INSERT COIN > to buy voucher",
  "coinslot.cancelled1"    : "Insert coin has ended, no coin inserted\nClick < INSERT COIN > to extend voucher",
  "coinslot.cancelled2"    : "NOTE:\nTo keep using the service, please insert a coin when requested. "
                           + "Multiple attempts without inserting a coin may temporarily or pemanently suspend you.",
  "vendo.note"             : "REMINDER:\nPlease insert a coin when requested. "
                           + "Multiple attempts without inserting a coin may temporarily or pemanently suspend you.",


  "invalid.username"       : "There has been an Invalid Voucher!\nPlease contact the owner",
  "vendo.modal.shown"      : "Click < INSERT COIN > to begin.\nPlease insert coin(s) or get BANNED.",
  "vendo.offline"          : "Vendo Device offline.\nPower on the Vendo Device\nand click < INSERT COIN > again.",
  "vendo.buy.done"         : "Insert Coin Successful.\nExecuting Autologin.\nPlease wait...",
  "vendo.timeout"          : "Insert Coin Time-out.\nyou will be BANNED\nif you don\'t insert coin next time.",
  "vendo.timeout.active"   : "Insert Coin Time-out.\nActive Code Saved.\nPlease click \"LOGIN\".",
  "vendo.timeout.login"    : "Insert Coin Time-out.\nExecuting Autologin.\nPlease wait...",
  "vendo.undefined"        : "Vendo Device Undefined Error.\nPlease contact the owner!\nclick < INSERT COIN > again.",
  "vendo.error"            : "Internal Error!\nPlease contact the owner.\n",
  "vendo.error.undefined"  : "Internal <undefined> Error.\nPlease contact the owner!\nclick < INSERT COIN > again.",
  "vendo.auto.login"       : "Thank you for the purchase!\nwill do auto login shortly",

/* JuanFi Messages */
  "coinslot.busy"          : "DON'T INSERT COIN!!! Try again later\nVendo Device Busy at the moment",
  "coin.slot.banned"       : "You are BANNED for not inserting coin!!!\nPlease click < INSERT COIN > again later",
  "coin.slot.notavailable" : "Vendo Device not available.\nPlease click < INSERT COIN > again later",
  "no.internet.detected"   : "No Internet Connection\nPlease click < INSERT COIN > again later",

  "coin.is.reading"        : "Coin is reading",
  "coin.not.inserted"      : "Coin not inserted",
  "coins.wait.expired"     : "Coin slot expired",


  "undefined"              : "There has been an Undefined Error!\nPlease contact the owner",
  "undefined.error"        : "There has been an Undefined Error!\nPlease contact the owner",
  "copyright"              : "Edmar Lozada"
};

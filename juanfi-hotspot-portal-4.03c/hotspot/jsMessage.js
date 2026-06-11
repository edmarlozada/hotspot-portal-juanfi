/* jsMessage.hs  */
/* Edmar Lozada */

/* ============================== */
/* change and translate messages  */
/* below to your native language  */
/* ============================== */

msg.Map = {

/* Portal Messages */
  "v.online"   : "You are now connected to the internet.<br>"
               + "If you wish to pause our service click < Pause Time ><br>",
  "v.offline"  : "You are NOT connected to the internet<br>"
               + "To try to reconnect, click < Resume Time >",
  "v.topup"    : "Enter a voucher code and Click < Topup Now ><br>"
               + "Ensure the voucher code is valid.",
  "v.notime"   : "<span>You have NO CREDITS for our Service!</span><br>"
               + "To add credits via Voucher click < Topup ><br>"
               + "To add credits via Vendo click < Insert Coin >",
  "m.login"    : "Fill out member name & password<br>"
               + "then click < LOGIN >",
  "m.online"   : "You are now connected to the internet.<br>"
               + "If you wish to stop our service click < LOGOUT >",
  "v.points"   : "Your current points balance.<br>"
               + "If you wish to redeem points click < Convert >",
  "v.convert"  : "Specify the number of points to convert.<br>"
               + "Verify the data are correct then click < Redeem >",
  "v.invalid"  : "<span>Invalid voucher code!</span><br>"
               + "Ensure the voucher code is valid.",
  "v.recover1" : "<span>Recovery file found!</span><br>"
               + "User data updated.",
  "v.recover0" : "<span>Failed to fetch recovery file!</span><br>"
               + "Unable to update user data.",


/* Vendo Messages */
  "vendo.buy"              : "Click < INSERT NOW > to begin buying credits.<br>"
                           + "Ensure the vendo is available & ready.",
  "vendo.ext"              : "Click < INSERT NOW > to begin adding credits.<br>"
                           + "Ensure the vendo is available & ready.",
  "vendo.note"             : "REMINDER:<br>Please insert a coin when required. Multiple attempts "
                           + "without inserting a coin may temporarily or pemanently suspend you.",
  "vendo.insert.now"       : "<span>Please Insert Coin Now!...</span><br>"
                           + "Vendo is ready to accept coin(s).",
  "vendo.connect"          : "Connecting to vendo device.<br>"
                           + "Please wait...",
  "vendo.connect.error"    : "<span>Unable to connect to the vendo device</span><br>"
                           + "Vendo Device is OFFLINE!",
  "vendo.connect.retry"    : "Unable to connect to vendo device<br>"
                           + "Attempting to reconnct",
  "vendo.getcoin.end"      : "Processing end of insert coin.<br>"
                           + "please wait...",
  "vendo.convert"          : "Processing topup voucher convertion.<br>"
                           + "please wait...",
  "vendo.convert.end"      : "Processing end of topup vendo.<br>"
                           + "please wait...",
  "vendo.rate"             : "Fetching JuanFi rate.<br>"
                           + "please wait...",
  "vendo.points"           : "Fetching JuanFi points.<br>"
                           + "please wait...",
  "vendo.redeem"           : "Click < CCONVERT > to begin redeeming points.<br>"
                           + "please wait...",
  "vendo.redeem.now"       : "Processing redeem points convertion.<br>"
                           + "please wait...",


/* JuanFi Messages */
  "convert.busy"           : "<span>Unable to top-up voucher!</span><br>"
                           + "The vendo device is currently in use.<br>"
                           + "Please attempt to top-up voucher later.<br>"
                           + "<code>( convert.busy )</code>",
  "coinslot.busy"          : "<span>DO NOT INSERT A COIN!!!</span><br>"
                           + "The vendo device is currently in use.<br>"
                           + "Please attempt to connect later.<br>"
                           + "<code>( coinslot.busy )</code>",
  "coin.slot.banned"       : "<span>BANNED for not inserting coin!</span><br>"
                           + "Please attempt to connect later.<br>"
                           + "<code>( coin.slot.banned )</code>",
  "coin.slot.notavailable" : "<span>Invalid juanfi admin console config!</span><br>"
                           + "Please contact the owner!<br>"
                           + "<code>( coin.slot.notavailable )</code>",
  "no.internet.detected"   : "<span>No internet detected!</span><br>"
                           + "Please attempt to connect later.<br>"
                           + "<code>( no.internet.detected )</code>",
  "coin.is.reading"        : "( Coin is reading )",
  "coin.not.inserted"      : "( Coin not inserted )",
  "coins.wait.expired"     : "( Coin wait expired )",

/* Mikrotik Messages */
  "mikrotik.retry"   : "Unable to connect to mikrotik<br>"
                     + "Attempting to reconnct",
  "error.login"      : "<span>Mikrotik login failed!</span><br>"
                     + "Please contact the owner!",
  "error.logout"     : "<span>Mikrotik logout failed!</span><br>"
                     + "Please contact the owner!",

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

/* Error Messages */
  "extended.offline"     : "<span>juanfi extended server offline!</span><br>"
                         + "Please contact the owner!",
  "netstat.file.missing" : "<span>netstat file missing or not installed!</span><br>"
                         + "Please contact the owner!",
  "expired.portal"       : "<span>Portal has expired!</span><br>"
                         + "Please contact the owner!",
  "unknown"              : "<span>There has been an unknown Error!</span><br>"
                         + "Please contact the owner!",
  "undefined"            : "<span>There has been an Undefined Error!</span><br>"
                         + "Please contact the owner!",
  "copyright"            : "Edmar Lozada"
};

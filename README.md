## hotspot-portal-juanfi
A hotspot portal, also known as a captive portal for mikrotik based juanfi system.

#### What's new ( Release 2.1d )
- recover voucher code
- telegram notification
- ( and many more )

#### jsConfig
```bash
/* ===================================== */
/* main vendo config                     */
/* ===================================== */

/* single wifi display name ( displayed in main portal ) */
   cfg.WiFiName  = "Single WiFi"; // default: "Single WiFi"

/* single vendo display name ( displayed in insert coin ) */
   cfg.VendoName = "Single Vendo"; // default: "Single Vendo"

/* ip address of single vendo machine */
   cfg.VendoIP = "10.0.0.2"; // ( required )

/* true  = login requires VendoCode only ( no password )                */
/* false = login requires VendoCode & Password ( Password = VendoCode ) */
   cfg.NameOnly = false; // default: true

/* vendo & member options */
   cfg.NoVendo = true; // default: false
   cfg.NoMember = true; // default: false

/* ===================================== */
/* multi vendo config ( overrules main ) */
/* ===================================== */

/* NOT-AVAILABLE on Trial  */
/* true  = multivendo      */
/* false = singlevendo     */
   cfg.MultiVendo = true; // default: false

/* 1 = manual pick VendoList ( NOT-IMPLEMENTED )    */
/* 2 = auto pick VendoList   ( by Interface Name  ) */
cfg.MultiVendoBy = 2; // default: 2

/* auto pick vendo list config ( by: Interface ) */
cfg.VendoList = [
  {
    VendoName : "Multi-Name",   // will overrule cfg.VendoName ( optional )
    WiFiName  : "Multi-WiFi",   // will overrule cfg.WiFiName  ( optional )
    NameOnly  : false,          // will overrule cfg.NameOnly  ( optional )
    NoVendo   : true,           // will overrule cfg.NoVendo   ( optional )
    NoMember  : true,           // will overrule cfg.NoMember  ( optional )
    VendoIP   : "10.30.10.2",   // will overrule cfg.VendoIP   ( required )
    Interface : "vlan-XX"       // auto pick vendo list config ( required ) ( ref: cfg.MultiVendoBy )
  },
  {
    VendoName : "Multi-Vendo",
    WiFiName  : "Multi-WiFi",
    NameOnly  : true,
    NoVendo   : false,
    NoMember  : false,
    VendoIP   : "10.0.0.2",
    Interface : "bridge-MAIN"
  }
];

/* ===================================== */
/* Developers Hidden Config              */
/* ===================================== */

   cfg.Currency = "₱";
   cfg.PrefixJuanFi = "V";         //( NOT-IMPLEMENTED )
   cfg.PrefixCoupon = "C";
   cfg.PrefixMember = ["M", "MN"]; //( NOT-IMPLEMENTED )

/* portal menu */
   cfg.Clock = false;       // default: true
   cfg.Pause = false;       // default: true
   cfg.Logout = false;      // default: true
   cfg.StatusData = false;  // default: true ( uptime-limit/validity/login-date/valid-until )
   cfg.ValTimeData = false; // default: true ( validity countdown )

/* no internet options */
   cfg.NetStatFile    = "netstat88.txt";
   cfg.NoNetNoLogin   = true; // default: false
   cfg.NoNetNoInsert  = true; // default: false
   cfg.NoNetAutoPause = true; // default: false ( NOT-IMPLEMENTED )

/* auto login options once connected to wifi */
   true  = login voucher automatically
   false = manual login voucher
   cfg.AutoLogin = true; // default: false ( for voucher only )

/* coindrop send telegram */
   cfg.Telegram = true; // default: false
   cfg.TGChatID = "-xxxxxxxxxxxxx";                                 // Telegram Group Chat ID
   cfg.TGBToken = "xxxxxxxxxx:xxxxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxx"; // Telegram Bot Token

/* background sounds */
   cfg.Audio = true;            // default: false
   cfg.AudioLiveLoop   = true;  // default: false ( long audio looping )
   cfg.AudioLivePerSec = false; // default: true  ( short audio / play per sec )
   cfg.AudioLiveVolume = 0.5;   // default: 0.5
   cfg.AudioDropVolume = 0.5;   // default: 0.5
   cfg.AudioLiveFile   = "xFiles/coin-start0.mp3";
   cfg.AudioDropFile   = "xFiles/coin-drop0.mp3";

/* vendo internal */
   cfg.CoinStopMax = 3;         // default: 3
   cfg.CoinGetDelay = 500;      // default: 500
   cfg.MikrotikDelay = 3000;    // default: 3000
   cfg.XMLReqTimeout = 5000;    // default: 5000
   cfg.GetCoinRecover  = false; // default: true
   cfg.VisibilityEvent = false; // default: true

/* Admin Info */
   cfg.EnableAdminInfo = true;  // default: false ( double tap on online/offline )

```

# hotspot-portal-juanfi
A hotspot portal, also known as a captive portal for mikrotik based juanfi system.

### Features ( Release 2.1f )

#### fix problems:
* 0 validity bug
* time lost -> via recover voucher ( note: must use our onLogin Script )
* hijack macasvoucher -> by using voucher code
* unremoved data file bug -> via our new onLogin Script

#### portal config: (enable/disable)
* Clock -> mikrotik clock (not device clock)
* Pause -> for: voucher
* Logout -> for: member
* StatusData -> Uptime Limit/Validity Time/Login Date/Valid Until
* UseTimeData -> Used Time
* ValTimeData -> Validity Countdown
* AutoLogin -> auto login via portal
* Telegram -> coindrop send message
* NoNetNoLogin -> no login when no net
* NoNetNoInsert -> no insert when no net
* GetCoinRecover -> end getcoin when refresh portal
* VisibilityEvent -> end getcoin when lost visibility

#### per vendo config / universal config:
* WiFiName -> wifi display name ( displayed in main portal )
* VendoName -> vendo display name ( displayed in insert coin )
* NameOnly -> login requires VendoCode only or Password=VendoCode
* NoVendo -> disable insert coin 
* NoMember -> disable member login

#### others:
* multi-vendo via vlan compatible
* no third-party library used
* recover voucher code
* tested on iPhone
* tested on ROS 6 & 7
* ( and many more )

#### Author:
* Chloe Renae
* Edmar Lozada
##### Facebook Contact: https://www.facebook.com/chloe.renae.2000
---
#### Support Files:
* hsup_v9.1x-juanfi-onlogin.rsc -> compatible with this portal
* hsup_v9.1b-juanfi-onlogout.rsc
* netwatch-edmarportal-v2.txt -> used by "NoNet" features
* walled_garden-telegram-v2.txt -> hospot bypass telegram

#### howto install "netwatch-edmarportal-v2.txt" && "walled_garden-telegram-v2.txt":
1. select all file content and copy.
2. paste to mikrotik terminal to install the script.
---

#### jsConfig:
```bash
/* ===================================== */
/* main vendo config                     */
/* ===================================== */

/* single wifi display name ( displayed in main portal ) */
cfg.WiFiName  = "Single WiFi"; // default: "Single WiFi"

/* single vendo display name ( displayed in insert coin ) */
cfg.VendoName = "Single Vendo"; // default: "Single Vendo"

/* true  = login requires VendoCode only ( no password )                */
/* false = login requires VendoCode & Password ( Password = VendoCode ) */
cfg.NameOnly = false; // default: true

/* vendo & member options */
cfg.NoVendo = true; // default: false
cfg.NoMember = true; // default: false

/* ip address of single vendo machine */
cfg.VendoIP = "10.0.0.2"; // ( required )


/* ===================================== */
/* multi vendo config ( overrules main ) */
/* ===================================== */

/* not-available on trial  */
/* true  = multivendo      */
/* false = singlevendo     */
cfg.MultiVendo = true; // default: false

/* 1 = manual pick VendoList ( NOT-IMPLEMENTED )    */
/* 2 = auto pick VendoList   ( by Interface Name  ) */
cfg.MultiVendoBy = 2; // default: 2

/* auto pick vendo list ( by: Interface ) */
cfg.VendoList = [
  {
    VendoIP   : "10.30.11.2",
    Interface : "vlan-10"
  },
  {
    WiFiName  : "Multi-WiFi",  // will overrule cfg.VendoName ( optional )
    VendoName : "Multi-Vendo", // will overrule cfg.WiFiName  ( optional )
    NameOnly  : true,          // will overrule cfg.NameOnly  ( optional )
    NoVendo   : false,         // will overrule cfg.NoVendo   ( optional )
    NoMember  : false,         // will overrule cfg.NoMember  ( optional )
    VendoIP   : "10.0.0.2",    // will overrule cfg.VendoIP   ( required )
    Interface : "bridge-MAIN"  // auto pick vendo list config ( required ) ( ref: cfg.MultiVendoBy )
  }
];


/* ===================================== */
/* developers hidden config              */
/* ===================================== */

/* portal config */
cfg.Currency = "₱";
cfg.About = "We provide internet to your devices";
cfg.Clock = false;       // default: true
cfg.Pause = false;       // default: true
cfg.Logout = false;      // default: true
cfg.StatusData = false;  // default: true ( uptime-limit/validity/login-date/valid-until )
cfg.ValTimeData = false; // default: true ( validity countdown )

/* auto login via portal */
/* true  = login voucher automatically */
/* false = manual login voucher */
cfg.AutoLogin = true; // default: false ( for voucher only )

/* coindrop telegram */
cfg.Telegram = true; // default: false
cfg.TGChatID = "-xxxxxxxxxxxxx";                                 // Telegram Group Chat ID
cfg.TGBToken = "xxxxxxxxxx:xxxxxxxxxxxxx-xxxxxxxxxxxxxxx-xxxxx"; // Telegram Bot Token

/* no internet config */
cfg.NetStatFile    = "netstat88.txt";
cfg.NoNetNoLogin   = true; // default: false
cfg.NoNetNoInsert  = true; // default: false
cfg.NoNetAutoPause = true; // default: false ( NOT-IMPLEMENTED )

/* vendo-audio config */
cfg.Audio = true;            // default: false
cfg.AudioLiveLoop   = true;  // default: false ( long audio looping )
cfg.AudioLivePerSec = false; // default: true  ( short audio / play per sec )
cfg.AudioLiveVolume = 0.5;   // default: 0.5
cfg.AudioDropVolume = 0.5;   // default: 0.5
cfg.AudioLiveFile   = "xFiles/coin-start0.mp3";
cfg.AudioDropFile   = "xFiles/coin-drop0.mp3";

/* vendo-internal config */
cfg.CoinStopMax = 3;         // default: 3
cfg.CoinGetDelay = 500;      // default: 500
cfg.MikrotikDelay = 3000;    // default: 3000
cfg.XMLReqTimeout = 5000;    // default: 5000
cfg.GetCoinRecover  = false; // default: true
cfg.VisibilityEvent = false; // default: true

/* admin info */
cfg.EnableAdminInfo = true;  // default: false ( double tap on online/offline )
```

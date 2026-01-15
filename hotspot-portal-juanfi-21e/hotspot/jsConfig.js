/* jsConfig.js  */
/* Edmar Lozada */

/* ===================================== */
/* main vendo config                     */
/* ===================================== */

/* ip address of single vendo machine */
cfg.VendoIP = "10.0.0.2"; // ( required )


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
/* Developers Hidden Config              */
/* ===================================== */

/* background sounds */
cfg.Audio = true;            // default: false

/* Admin Info */
cfg.EnableAdminInfo = true;  // default: false ( double tap on online/offline )

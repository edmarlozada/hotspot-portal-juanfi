/* jsLoader.js  */
/* Edmar Lozada */

/*=== Telegram Functions ===*/
/*
data.UserName
data.DevMAC
data.DevIP
data.Interface
data.VendoName
data.VendoIP
data.NewCoin
data.TotalCoin
data.TopupVC
*/
function TGCoinDrop(data) {
  console.log("<TGCoinDrop>", "data:", {
    UserName : data.UserName,
    NewCoin  : data.NewCoin.toString(),
    TotalCoin: data.TotalCoin.toString(),
    VendoIP  : data.VendoIP
  });
  /*
  const token = "toker here";
  const chatid = "chatid here";
  const message = "UserName : " + data.UserName + "%0A" + data.DevMAC + "%0A" +
                  "Coin=[ " + data.NewCoin + " ] Total=[ " + data.TotalCoin + " ]";
  fetch(`https://api.telegram.org/bot${token}/sendmessage?chat_id=${chatid}&text=${message}`);
  */
}
function TGCoinTotal(data) {
  console.log("<TGCoinTotal>", "data:", {
    UserName : data.UserName,
    TotalCoin: data.TotalCoin.toString(),
    VendoIP  : data.VendoIP
  });
  /*
  const token = "toker here";
  const chatid = "chatid here";
  const message = "UserName : " + data.UserName + "%0A" + data.DevMAC + "%0A" +
                  "Total Coin=[ " + data.TotalCoin + " ]";
  fetch(`https://api.telegram.org/bot${token}/sendmessage?chat_id=${chatid}&text=${message}`);
  */
}
function TGCoinTopup(data) {
  console.log("<TGCoinTopup>", "data:", {
    UserName : data.UserName,
    NewCoin  : data.NewCoin.toString(),
    TotalCoin: data.TotalCoin.toString(),
    TopupVC  : data.TopupVC,
    VendoIP  : data.VendoIP
  });
  /*
  const token = "toker here";
  const chatid = "chatid here";
  const message = "UserName : " + data.UserName + "%0A" +
                  "Topup VC=[ " + data.TopupVC + " ]";
  fetch(`https://api.telegram.org/bot${token}/sendmessage?chat_id=${chatid}&text=${message}`);
  */
}



/*=== DO NOT EDIT BELOW THIS POINT ===*/

var gm = { };
var gj = { };
var gx = { };

var api = { };
var cfg = { };
var msg = { };

var usr = { };
var ext = { };

gm.Identity = "hAPs";
cfg.EnableAdminInfo = true;

var iNavi = 0;
var iType = "";
if (window.performance.navigation) {
  iNavi = window.performance.navigation;
  if (iNavi==255) { iNavi=5; }
}
if (window.performance.getEntriesByType("navigation")) {
  iType = window.performance.getEntriesByType("navigation")[0].type;
  if (iType=="navigate")     { iNavi=1; }
  if (iType=="reload")       { iNavi=2; }
  if (iType=="back_forward") { iNavi=3; }
  if (iType=="prerender")    { iNavi=4; }
}
if (iNavi==2) {
  location.replace("./");
}


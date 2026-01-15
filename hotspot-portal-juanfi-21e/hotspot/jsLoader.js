/* jsLoader.js  */
/* Edmar Lozada */

var api = {};
var msg = {};
var cfg = {};

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

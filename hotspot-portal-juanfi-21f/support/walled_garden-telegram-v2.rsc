{
local gList "list_telegram_api"
local gAddr "api.telegram.org"
local gNote "telegram api.org"
if ([/ip firewall address-list find address=$gAddr]="") do={
     /ip firewall address-list  add address=$gAddr list=$gList
}
/ip firewall address-list set [find address=$gAddr] \
  list=$gList \
  comment="$gNote"
if ([/ip hotspot walled-garden ip find dst-address-list=$gList]="") do={
     /ip hotspot walled-garden ip  add dst-address-list=$gList action=accept
}
/ip hotspot walled-garden ip set [find dst-address-list=$gList] \
  action=accept \
  comment="walled-garden ip ( telegram )" \
  !dst-address \
  !dst-port \
  !protocol \
  !src-address \
  !src-address-list \
  disabled=no
}

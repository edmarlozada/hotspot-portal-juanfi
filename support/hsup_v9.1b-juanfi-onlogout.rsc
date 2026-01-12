# hsup_v9.1b-juanfi-onlogout.rsc
# by: Chloe Renae & Edmar Lozada
# ------------------------------

# ( 0=NO / 1=YES ) #
local cfgShowLogs 1 ;# Show Log Debug on Logs

# ------------------------------ #
# Do NOT Edit below this point   #
# ------------------------------ #
local iUsr $username
local aHSU [ip hotspot user get $iUsr]
local iUsrTime ($aHSU->"limit-uptime")
local iUseTime ($aHSU->"uptime")

if ($cfgShowLogs) do={
  if ($cause!="admin reset") do={
  local cUsrTime "UNLIMITED"
  local iBalTime "UNLIMITED"
  if ($iUsrTime>0) do={
    set cUsrTime $iUsrTime
    set iBalTime ($iUsrTime-$iUseTime)
  }
  log debug ("JuanFi-OUT => user=[ $iUsr ] limit=[ $cUsrTime ] uptime=[ $iUseTime ] remaining=[ $iBalTime ] cause=[ $cause ]")
  }
}

# Check Expiration
if ($cause="traffic limit reached" || (($iUsrTime>0) && ($iUsrTime<=$iUseTime))) do={
  local iSySched [parse [system scheduler get [find name=$iUsr] on-event]]
  $iSySched "Expire" "TimeLimit"
}

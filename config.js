const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254756138143";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_47_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhGTlY3TzdpOWJZUThMcUcxYzlUbDhTbUVTUHRQQ1E5ZDNVMWViK1UwaTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU2MTM4MTQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMDNDNDA1MzJDRDc2RUNGRDdGMzZCQUM1MjFERjRFQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI3MTg4MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTYxMzgxNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNEOUY3NEQ5QzRFRjhGQTcxQUYwRTgxOTMwOTE5RTQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjcxODgzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIYW1nVUdXcFRwdUhncmxKOGdUbGx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE2NTJkYzIxLTBjODEtNDA0YS1iMjAwLTU3YWZhNTZhMzVmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyMzUsXG4gICAgICAxMjQsXG4gICAgICAxMjUsXG4gICAgICAxNjksXG4gICAgICAxNTIsXG4gICAgICAxNTEsXG4gICAgICAyMCxcbiAgICAgIDExOSxcbiAgICAgIDIyMyxcbiAgICAgIDQyLFxuICAgICAgMjAsXG4gICAgICAxMDMsXG4gICAgICAyMTQsXG4gICAgICAyNDQsXG4gICAgICAxMTEsXG4gICAgICA5MyxcbiAgICAgIDQwLFxuICAgICAgNzIsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTMsXG4gICAgICAyMDcsXG4gICAgICA1MCxcbiAgICAgIDEwMSxcbiAgICAgIDgzLFxuICAgICAgMTMsXG4gICAgICA2MSxcbiAgICAgIDk0LFxuICAgICAgMTg5LFxuICAgICAgMjM2LFxuICAgICAgOCxcbiAgICAgIDE3LFxuICAgICAgMTQsXG4gICAgICA0MCxcbiAgICAgIDE5LFxuICAgICAgMjEsXG4gICAgICAxNTAsXG4gICAgICAzNixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg5NUxROU1KXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTYxMzgxNDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzgxNzg1MDExOTM3MzQ6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDYWxsX21lX0R1bmtpZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3cStYSVE2T0djdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSG52RlQ4K1cxbkw5WUVVOXIvR0tjUWRiTjNLOG9jak40WDZ2dFFGN2Ewbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtWXUwdEhKeHF5RGRMUEFFd2Vmby9mdVBlbkQvL1BHUXE0SUVXaXZkVlFKTnQ3aDJ0bVpDTHJpaEsvZHZHOVd5bngyZjZvUnBRVDZxeWdEdTIzMldBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHRDRCNmE3dUg1YzRZVFErU2Z1aWJqTlRINk1zaElQc0xERWlXazFGTHB4ODlpWHZHeTVlV21vLzNuV2sxNjlscWplM25RZkk5QjBGTmEwcFUyN0loZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTYxMzgxNDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjcxODgyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVByUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHJSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNTBqUkdJM0g0TWJOYTEvR2dZQ0xpdFlTN1YrU201S3hOc3d0MEwzZWkrST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDEwNzEzOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjcxODgyNzYyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

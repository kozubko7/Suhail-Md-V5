const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Europe/united kingdom";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁𓊈𒆜🅳🅾🅽🆆🅸🆉𒆜𓊉꧂ " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_41_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrM0dKWmV1UURINmp6QzdQSDFrUHZ5Y283OU1TaDJLVDUzQWhTV3RENm9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzQ3MjAxNTc2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4MkRERkIwNjY2REJERjk4QTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MzUwOTA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NDcyMDE1NzYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTgyMkM4NkZCQTk0ODFEMDk3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjczNTA5MDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0NzIwMTU3NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDA1NkIxRjQ5QzVFQkJGMDY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzM1MDkxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWS0tNSEx0R1JzQ1NWYTAtb2JzZ3hBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxMmFmMGZmLTRmM2UtNDlmYS05ZTEwLTJkMGM5ZjgwNmNhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDI0LFxuICAgICAgMTYzLFxuICAgICAgMTUxLFxuICAgICAgMjM5LFxuICAgICAgODYsXG4gICAgICAxNjQsXG4gICAgICAyNTQsXG4gICAgICAxNTIsXG4gICAgICA4NSxcbiAgICAgIDkwLFxuICAgICAgMjI0LFxuICAgICAgMTkyLFxuICAgICAgMjA0LFxuICAgICAgNDQsXG4gICAgICA3NyxcbiAgICAgIDEwMSxcbiAgICAgIDE1NixcbiAgICAgIDE2MCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMjgsXG4gICAgICAxMjgsXG4gICAgICAxMzYsXG4gICAgICAyMzQsXG4gICAgICAxNTIsXG4gICAgICA1NCxcbiAgICAgIDU4LFxuICAgICAgMTcxLFxuICAgICAgMTA1LFxuICAgICAgMjMwLFxuICAgICAgMjM4LFxuICAgICAgMTgyLFxuICAgICAgMTM3LFxuICAgICAgMzcsXG4gICAgICA4OSxcbiAgICAgIDY1LFxuICAgICAgMTE4LFxuICAgICAgNTYsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYU1EzUzU0RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NDcyMDE1NzYzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Mjc4ODExMDkzNDAyNToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl6fwnZe18J2YgvCdl5rinLDinJ5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMT0l0L2tPRVBTUTFiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhsUXhzQTdIWjlQeGYvdmtQQ3UzTUpBejNLRmdsWC8rZkhzTDhBZlhKWDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTFRYRjFBOEJDWHpuNUNaUmp6U0NHczYvekxRdUpJTlczUmZTSFRkUWx3K0JpNUVtalUwRThyZlA2TTlVVXhScEowSCtVTXFvSEdSZWdQeU15Sy9XQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZkk3Ty8zTXphOUtWeFA0dk4rSEVVZHhUcHhJZVd6OTd4MCsyWWppUWtoK1J3WjhWVVRqWktma21KdG1pUW9JS0wwYXhJZzJ5R0ZVSktPdmdrb1R5Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NDcyMDE1NzYzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MzUwOTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGFVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzejVnVGZuUW9TMjVtZ09nSXphSHdUR2wzRjNEaWFwY01mbTRQaURvU3dvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwMTI3NTM5NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzM1MDkwNDE2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "J͢ S͢",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

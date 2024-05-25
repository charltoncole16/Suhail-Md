const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237682471341";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_58_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidCtvbEI1SGdHZFZ1YmFKTk53SXZIQ2M5Mk5BT3R2Z1BCSmJjbVdMTUhjTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib01mWm5ia2FRRG02bTBnVElnS0hDQVwiLFxuICBcInBob25lSWRcIjogXCI3ZjgyMjQ3YS03NDcyLTRjMDgtOTIzOC0wZGRjZTc3MGQwYzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTEwLFxuICAgICAgODQsXG4gICAgICA0NixcbiAgICAgIDM2LFxuICAgICAgMTMwLFxuICAgICAgMjM2LFxuICAgICAgMTgwLFxuICAgICAgMjAsXG4gICAgICAxNTMsXG4gICAgICAyMzcsXG4gICAgICAxMzcsXG4gICAgICAxNzYsXG4gICAgICAxOTEsXG4gICAgICAyNDAsXG4gICAgICAyNDEsXG4gICAgICAxMTcsXG4gICAgICAyNDUsXG4gICAgICAzNixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMTk4LFxuICAgICAgMTIzLFxuICAgICAgMjAzLFxuICAgICAgMTc0LFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgMTE5LFxuICAgICAgNyxcbiAgICAgIDIzNixcbiAgICAgIDIxOSxcbiAgICAgIDIzMCxcbiAgICAgIDYxLFxuICAgICAgMjUwLFxuICAgICAgMjI5LFxuICAgICAgMjUzLFxuICAgICAgMTc2LFxuICAgICAgMTgyLFxuICAgICAgMTIyLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldTNVRZNEdHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODI0NzEzNDE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNzU4MDY3MjQwOTkzOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2dWcrSUZFTjdjeDdJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkNETkxtb1RYa05Md2M4dlR4dTdxYjk1cmZYZlZ0YXJYU3RENFcrTjdXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhZlJiSjFFK0xFaHVRZitZaDlHeDkzSjQzZGRWdjg2Ly9SU25XQ1YxZU5ZTXpxK1Q3Y0tCRkYvTW5TSnVIbk9MbDZ2bWxnMHJmNTE4RWNVMDNvMGRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2OXFpejRNeXFQKzFIZ0hLcTFiM1NkMHFPWlM3UkM5ZGR0aDIwT2gwYlRjdnRNSlhUTElIMTNndXN5Yi8waXUxZzNPOGFjblAvYkk5aE45Ymg0bE9DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODI0NzEzNDE6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjQ1NDc1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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

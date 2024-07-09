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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_36_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS21Bcll1OVUwUStCNVg3OXZkWlUybktpS2dESk9WdytVRkpTamprYXgyND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2IzN014cW5Ra3lPMkdLVHNrXzNPQVwiLFxuICBcInBob25lSWRcIjogXCJjYzVjNmM5NS01N2UzLTRjZTEtOWZiNS05ZjE0ZGE2MWJhYWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgNDQsXG4gICAgICA1MSxcbiAgICAgIDIzNyxcbiAgICAgIDE3MSxcbiAgICAgIDY5LFxuICAgICAgMTkxLFxuICAgICAgMTE4LFxuICAgICAgMjUyLFxuICAgICAgMTg4LFxuICAgICAgNjIsXG4gICAgICAxOTIsXG4gICAgICAxMDksXG4gICAgICAxNjIsXG4gICAgICAxNyxcbiAgICAgIDEwNixcbiAgICAgIDI0MixcbiAgICAgIDExLFxuICAgICAgMTE2LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDI1LFxuICAgICAgMTYxLFxuICAgICAgMTg0LFxuICAgICAgODEsXG4gICAgICAyMTMsXG4gICAgICA5OSxcbiAgICAgIDE4MCxcbiAgICAgIDg2LFxuICAgICAgMjQyLFxuICAgICAgMTU0LFxuICAgICAgNzIsXG4gICAgICAxOTksXG4gICAgICA5OSxcbiAgICAgIDkzLFxuICAgICAgOTAsXG4gICAgICAxNTAsXG4gICAgICAyNDQsXG4gICAgICAyNTMsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWUpDNzNOOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjgyNDcxMzQxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTc1ODA2NzI0MDk5MzoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3ZnK0lGRUo3RXNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJDRE5MbW9UWGtOTHdjOHZUeHU3cWI5NXJmWGZWdGFyWFN0RDRXK043V0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibHJSeWJ5amVBNUZLWEE0Slp2Rkx3TlNrVlBvcWJreklCMGxTQXM4RnlqWUZhTDFxU2lBeEhDNFpFaVVZdlAxSjFlRkVQVlFCdWRkT0xydjIzVC9ZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGZBTlJvOHR6cHRiMnpJQ3hGRUEydk0zUTF5NllNU2dhTldGSkZuOWYzNDI3L2UrOFlSeCtGSzFIQVZENDk0Tk13ckR6YTJ1enpNbnprNTZnMVBkZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjgyNDcxMzQxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ5MjU3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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

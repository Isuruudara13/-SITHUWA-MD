const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94719370832'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdVK01wUFNLK0NFRkhQZFQ4K2xORTB5Q3REc3ovM3dESVpiTmlqN3duND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVQ3ZXBQREl2am90T2pIcDdkQWtxS01DMUNSSjNCZlNPc1BZSjZGN2dEbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR01NaW1yOGhXZWgyRi8rQ1NGQlU5cXhkM1lqK0dQVURlTEpMWFJ4clhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIb28wSFg3czVpTnQ5dFJNbVRIWnAzTVAzQUVIVHVXYzVDVGZkblB1d2gwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPb1QvL3NxdVFzU0VPWlhLQzdtMlgxaWhUbm9DSHdIaG9hZ3hFN1lBbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN5dk9TOFhmUnBISE8waGlZaE5xRHlndGliUmdONGxkRzhraXNGSjJ6VkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTc091MFp3dlhKdHhPZ2gxNGtNMzgweUFlbkxXTmhxRW5JRm1wZmJ3dWhycnFRMUYwcUFUektzSkNsNjhqMjBEaFJDNW9ZTFVMcnUzbllTbWRhcTJqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExOSwiYWR2U2VjcmV0S2V5IjoiTStEOGdGUkQ1NGlVZGNqaVhRSEdQNUdOcSs5MHVIeG9mVW9IU0pDeHFXOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYWM1Mjk4cE9Tb0tyYUQ5emdXenpJQSIsInBob25lSWQiOiI4NDI5OWNhNi1kOGI5LTQ3MzEtODdhOC02YjA5ZDIzM2M5YWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFI4SE9idHVNOFcwV2tVMmZSS0ZYdkhPV1lvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaV0ZXV01UWlFISkYyK3ozVmFuSTJJOGU3UFE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ05sTEFFRUwzZSs2c0dHQ1k9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlpQUFwcjAxQWF3cUdpZzBLemJrSVJ4Um1kY2xVWFVFMlNhTUM0OEdrd0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6InYwRkZRemNwNUlDTUhpWmNZMkRJRHlBcHJodWpHRS9NOVNLZVdYazZhWGpGbmFCcEk4NVVaN2tZWTN0c3ZNSTRPbnZSWGRNR25BOTdWK0NBN3F3akR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtMFBEdDZpVWlraHg5UTBkVllCVGdaakdhaFJFSDZsMjJjdzNXc3ZwTE8zZ3pYOE1zZUZMV1psa2tXODh1YVY5VEZZbXNIeHhma00vbW1VL0ZVTWtoZz09In0sIm1lIjp7ImlkIjoiOTQ3MTkzNzA4MzI6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Lag4LeU4Lan4LeSIOC2tOC3lOC2reC3jyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxOTM3MDgzMjozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjb2dBS2E5TlFHc0tob29OQ3MyNUNFY1VablhKVkYxQk5rbWpBdVBCcE1BIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAyODE3NjAwfQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY 𝑀𝑅 𝙽𝙰𝙳𝙸𝙻━✗',
  
  botname:   process.env.BOT_NAME === undefined ? "𝑀𝑅 𝙽𝙰𝙳𝙸𝙻━✗" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝑀𝑅 𝙽𝙰𝙳𝙸𝙻━✗' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ?  false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 

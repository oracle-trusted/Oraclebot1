require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285179680153"
global.namaowner = "Zetsu91"
global.namaowner2 = "Zetsu91"

//======== Setting Bot & Link ========//
global.namabot = "Ainindia" 
global.namabot2 = "Xychulz-Botz"
global.idsaluran = "1"
global.linkgc = "1"
global.linkgc2 = "1"
global.linksc = "1"
global.linksaluran = "1"
global.linkyt = '1'
global.packname = "Zetsu91"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.autopromosi = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5000
global.delayjpm = 13000

//========== Setting Foto ===========//
global.imgreply = "https://telegra.ph/file/23c925db6aec5af12023b.jpg"

global.imgbug = fs.readFileSync("./media/Bug.jpg")
                       
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgmenu2 = fs.readFileSync("./media/Menu2.jpg")
global.imgfake1 = fs.readFileSync("./media/Fake1.jpg")
global.imgfake2 = fs.readFileSync("./media/Fake2.jpg")
global.imgslide = "https://telegra.ph/file/23c925db6aec5af12023b.jpg"
global.imgpanel = fs.readFileSync("./media/Panel.jpg")


//========== Setting Panell ==========//
global.egg = "15"
global.nestid = "5"
global.loc = "1"
global.domain = "https://serverpanell.biz.id"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Gak Ada"
global.dana = "082239946644"
global.gopay = "082239946644"
global.ovo = "082239946644"
global.qris = "https://telegra.ph/file/64670a4ba71aab8f44bff.jpg"
                             
//=========== Api Domain ===========//
global.subdomain = {
"digitalserver.biz.id": {
"zone": "c2047082b74a80e5be03959bad59592a", 
"apitoken": "SDG2MrxgoJLZ8GDkpWk2PalEn-Vg8PQkjEsPQ_Wy"
}, 
"skyzo.my.id": {
"zone": "9de948bb1589175a8c9353612759b678", 
"apitoken": "poNl1SWzhD3rCUqFwfXwK7iAm2SobqeyLFJWa9nB"
}, 
"tokopanellku.my.id": {
"zone": "5f4a582dd80c518fb2c7a425256fb491", 
"apitoken": "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "4CriWXyR2Ot8A2sW139O999WUUhC7Vw_a_8DSeCl"
}
}


//========= Setting Message =========//
global.msg = {
"error": "Error dek 😹",
"done": "Done Mass, Buy Vpn Termurah Ada Di https://wa.me/6285179680153", 
"wait": "Proses rek😮‍💨", 
"group": "Perintah ini cuma bisa digrup rek🤡", 
"private": "Perintah ini cuma bisa dipm/private rek😹", 
"admin": "Perintah ini cuma bisa untuk admin rek 😂", 
"adminbot": "Jadiin gw admin dulu dek , baru gw mau 😂🤡\nhttps://s.id/VCLOUDX", 
"owner": "Khusus Xychulz Aja Dek 😏\nhttps://wa.me/6285179680153", 
"developer": "Khusus Ainindia ya dek cantik/ganteng😂"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
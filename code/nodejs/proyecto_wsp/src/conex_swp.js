const qrcode = require('qrcode-terminal');
const {Client} = require('whatsapp-web.js');

const client = new Client();

const conex = async () => {

	client.on('qr', qr => {
		qrcode.generate(qr, {small: true});
	});

	client.on('ready', () => {
		console.log("Phone ready ... :D");
	});

	client.on('message', msg => {
		responder(msg.from,msg.body);
	});

	await client.initialize();
}

const responder = async (cel,msg) => {
	console.log('From : ',cel);
	console.log('Message : ',msg);
	try{
		if(msg == 'Hola'){
			console.log("Enviando a: ",cel);
			const res = await client.sendMessage(cel,"Buuuu!!!");
			return res;
		}
	} catch (error) {
		console.error("Error: ",error);
	}
}

const enviar = async (cel,msg) => {
	console.log('From : ',cel);
	console.log('Message : ',msg);
	try{
		console.log("Enviando a: ",cel);
		const res = await client.sendMessage(cel,msg);
		return res;
	} catch (error) {
		console.error("Error: ",error);
	}
}

module.exports = {
	conex,
	responder,
	enviar
}
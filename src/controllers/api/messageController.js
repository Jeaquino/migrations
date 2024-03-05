const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const messageController = {
    send: async (req,res) => {
        try {
            
        
        const {body} = req
        console.log("log de messageController: ", body);
        console.log("log de token: ", process.env.WHATSAPP_TOKEN);
        
        const response = await fetch('https://graph.facebook.com/v18.0/249003218294491/messages',{
            method: 'post',
            body,
            headers: {'Content-Type': 'application/json', 'Authorization': process.env.WHATSAPP_TOKEN}
        });

        const resultado = await response.json();

        return res.status(200).send(resultado);
    } catch (error) {
        return res.status(400).send(error.message);
    }
    },
    sendTemplate: async (req,res)=>{

    }
}

module.exports = messageController;
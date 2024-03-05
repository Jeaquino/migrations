const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const sendTemplate = async (num) => {
    const template = {
        messaging_product: "whatsapp",
        to: num,
        type: "template",
        "template": {
            "name": "hello_world",
            "language": {
                "code": "en_US"
            }
        }
    }

  const response = await fetch(
    "https://graph.facebook.com/v18.0/249003218294491/messages",
    {
      method: "post",
      body: JSON.stringify(template),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`
      },
    }
  );

  const resultado = await response.json();
  return resultado;
}

const messageController = {
  send: async (req, res) => {
    try {
      const users = [543513569509,541176442911,542994618014]
      users.forEach(usuario => {
        sendTemplate(usuario).then(resultado => console.log("resultado: ",resultado))
      });
      return res.status(200).send("campanaña enviada con exito");
    } catch (error) {
        console.log(error.message);
      return res.status(400).send("Error en el envio de campaña");
    }
  },
  
  sendTemplate: async (req, res) => {},
};

module.exports = messageController;

require('dotenv').config();

const webhookController = {
    verify:(req,res)=> {
        console.log("WEBHOOK_VERIFIED");
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
      
        // Check if a token and mode is in the query string of the request
        if (mode && token) {
          // Check the mode and token sent is correct
          if (mode === "subscribe" && token === process.env.TOKEN_API) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
          } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
          }
        }
    },
    viewMessage:(req,res)=> {
        console.log("Mensaje ingresando: ", req.body.entry[0].changes[0].value);
        return res.status(200);
    }
}

module.exports = webhookController;
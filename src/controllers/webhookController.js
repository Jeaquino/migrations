const webhookController = {
    viewMessage:(req,res)=> {
        console.log("Mensaje ingresando: ", req.body);
    }
}

module.exports = webhookController;
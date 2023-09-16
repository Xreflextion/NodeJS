const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappService = require('../services/whatsappService');

const verifyToken = (req, res) => {  // req is what input we receive, res is what output we send
    try {
        var accessToken = 'bwaap'
        var token =  req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'] // the output we should be sending (accessToken = token)

        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge)
        } else {
            res.status(400).send()
        }
    } catch (e) {
        res.status(400).send()
    }
}

const receiveMessage = (req, res) => {
    try {
        var value = req.res.req.body['entry'][0]['changes'][0]['value']
        var messages = value['messages'];
        
        if (typeof messages != 'undefined') {
            var [type, number, content] = getInfo(messages)
            myConsole.log(type, number, content)
            whatsappService.sendMessageWhatsapp('You sent: ' + content, number);
        }
        res.send('RECEIVED');
    } catch (e) {
        myConsole.log(e);
        console.log(e);
        res.send(e);
    }
    
}

function getInfo(messages) {
    var message = messages[0];
    var number = message['from'];
    var type = message['type'];
    if (type == 'image') {
        var content = message['image']['sha256'];
    } else if (type == 'text') {
        var content = message['text']['body'];
    }
    return [type, number, content]
}

// Export functions to be used in other files
module.exports = {
    verifyToken,
    receiveMessage
}
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

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
        // var entry = (req.body['entry'][0]);
        // var changes = (req.body['changes'][0]);
        var value = req.res.req.body['entry'][0]['changes'][0]['value']
        var messages = value['messages'];
        var message = messages[0]['text']['body'];

        myConsole.log(message)
        // console.log(res);
        // res.send(message);
    } catch (e) {
        myConsole.log(e);
        console.log(e);
        // res.send(e);
    }
    
}

// Export functions to be used in other files
module.exports = {
    verifyToken,
    receiveMessage
}
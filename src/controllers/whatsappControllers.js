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
    res.send('receiveMessage');
}

// Export functions to be used in other files
module.exports = {
    verifyToken,
    receiveMessage
}
const verifyToken = (req, res) => { 
    res.send('verifyToken');
}

const receiveMessage = (req, res) => {
    res.send('receiveMessage');
}

// Export functions to be used in other files
module.exports = {
    verifyToken,
    receiveMessage
}
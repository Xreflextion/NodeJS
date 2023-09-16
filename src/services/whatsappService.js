const https = require('https')

function sendMessageWhatsapp(textResponse, number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'recipient_type': 'individual',
        'type':'text',
        'text': {
            'body': textResponse
        }
    });
    const options = {
        host: 'graph.facebook.com',
        path: '/v17.0/136661806189213/messages',
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer EAANopVwoD4QBO4HxDZAjLZA63R7WQyPBlTMil8UKmlEKSuPf9WaYioaUOINf5EVxLlEQZB7Q0BN9DgZASMCof1vYcCkLZAL9B8BCwXISFDr5pfaZAuaqSas9BsvFkEPaOSM96wZAtRIbchHlgw45ZBLTBURuyVBc2KITdsZA3nW3silZCXb9tKeRClSsr9tmqZA23iR'
        }
    }

    const req = https.request(options, res => {
        res.on('data', d=> {
            process.stdout.write(d);
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    req.write(data);
    req.end();

}

module.exports = {
    sendMessageWhatsapp
}
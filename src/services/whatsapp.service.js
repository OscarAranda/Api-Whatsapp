const https = require('https');


function SendMessageWhatsApp(textResponse, number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                "body": textResponse
            },
            "type": "text"
        });

    const options = { 
        host: 'graph.facebook.com',
        path: '/v18.0/266547939874298/messages',
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer EAAKejEOzeakBO51geF0bs3fIZCWeIQhs7UZBZB4IEPZBhJDRi28V4VB7jMcH51LG7r58UMPueB6ToHJy6u7F3QCfLLy7ihHZByhr8hEBiMAO74rLIOC6ZCOJwkQd3PuFZCOWzupwR9ZAWBajzrNts8D67ZAYWL8jcnFfyURKZBJp7Jv1qeZBSZCKp9OwCWXeDes4k7s1'

        }
    };
    const req = https.request(options, res => {
        res.on('data', d=>{
            process.stdout.write(d)
        });
    }) ;
    req.on('error', error => {
        console.error( error );
    });

    req.write(data);
    req.end();

}
module.exports = {
    SendMessageWhatsApp
}
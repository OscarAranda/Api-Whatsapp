const https = require('https');


function SendMessageWhatsApp(data) {
    
    const options = { 
        host: 'graph.facebook.com',
        path: '/v18.0/266547939874298/messages',
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.AUTHORIZATION

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
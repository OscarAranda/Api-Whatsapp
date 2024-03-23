const VerifyToken = (req, res ) => {
    try {
        var accessToken = 'RSDSDG42314tsDFSDV53';
        var token = req.query('hub.verify_token');
        var challenge = req.query('hub.challenge');
        if(challenge != null && token != null && token == accessToken){
            res.send(challenge); 
        }else{
            res.status(400).send()
        }
    } catch (e) {
        res.status(400).send();
    }
    
    
    res.send("hola verifyToken")
}


const RecibedMessage = ( req, res ) => {
    console.info('Hola received')
    res.send("Hola recibeMessage")
}


module.exports = {
    VerifyToken,
    RecibedMessage
}
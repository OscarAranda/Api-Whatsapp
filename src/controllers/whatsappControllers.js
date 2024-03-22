const VerifyToken = (req, res ) => {
    try {
        var accessToken = 'avafvasdfvasdvasdvasd';
        var token = req.query('hub.verify.token');
        var challenge = req.body('hub.challenge');
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
    res.send("Hola recibeMessage")
}


module.exports = {
    VerifyToken,
    RecibedMessage
}
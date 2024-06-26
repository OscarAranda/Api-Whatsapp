
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));
const processMessage = require('../shared/processMessage')

const VerifyToken = (req, res ) => {
    try {
        var accessToken = 'RSDSDG42314TLulrKcLekUewOV1MPmf9oI5l7gB4zE7qwIpbpH2YM5oMHaLYxy5RL6QlHBquuqQZSDFSDV53';
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];
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


async function RecivedMessage ( req, res ) {
   
   try {
    var entry = (req.body['entry'])[0];
    var changes = (entry['changes'])[0];
    var value = changes['value'];
    var messageObject = value['messages'];
    

    if (typeof messageObject != 'undefined') {
        var messages = messageObject[0];
        var number = messages['from'];
        number = number.replace('549', '54');

        var text = GetTextUser( messages );
        myConsole.log(text);
        myConsole.log(messageObject);

        if( text != '' ){
           
           await processMessage.Process( text, number );

        }

        
       
    }
    res.send('EVENT_RECEIVED');

   } catch (e) {
    
       myConsole.log(e);
       res.send("EVENT_RECEIVED")
   }
   
   
}

function GetTextUser(messages){
    var text = '';
    var typeMessage = messages['type']

    if( typeMessage == 'text' ){
        text = (messages['text'])['body']
    }
    else if( typeMessage == 'interactive' ){
        var interactiveObject = messages['interactive'];
        var typeInteractive = interactiveObject['type'];
        

        if(typeInteractive == 'button_reply'){
            text = (interactiveObject['button_reply'])['title'];
            
        }else if(typeInteractive == 'list_reply'){
            text = (interactiveObject['list_reply'])['title'];

        }else{
            myConsole.log('Sin mensaje');
        }


    }else{
        myConsole.log('Sin mensaje');
    }
    return text;
}


module.exports = {
    VerifyToken,
    RecivedMessage
}
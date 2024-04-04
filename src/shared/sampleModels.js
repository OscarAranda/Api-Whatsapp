function SampleText(textResponse, number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                "body": textResponse
            },
            "type": "text"
        });
    return data;
    
}

function SampleImage(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "image",  
            "image": {
                "link": 'https://lh3.googleusercontent.com/a/ACg8ocLEeu54jcKpfJU5pmcAa6IlurjXABkeZHiLtKw7Zi33VND_=s288-c-no'
            }
        });
    return data;
    
}
function SampleAudio(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "audio",  
            "audio": {
                "link": 'https://lh3.googleusercontent.com/a/ACg8ocLEeu54jcKpfJU5pmcAa6IlurjXABkeZHiLtKw7Zi33VND_=s288-c-no'
            }
        });
    return data;
    
}
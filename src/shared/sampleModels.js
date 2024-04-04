// texto
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

// imagen
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

// audio
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

// video
function SampleVideo(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "video",  
            "video": {
                "link": 'https://photos.app.goo.gl/69DSsRjKjXUz2Bwu9'
            }
        });
    return data;
    
}

// documento
function SampleDocument(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "document",  
            "document": {
                "link": 'https://impresorasrenting.com/wp-content/uploads/2022/08/Lexmark-XC2326-1.pdf'
            }
        });
    return data;
    
}

// botones
function SampleButtons(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",  
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¿Confirmas tu registro?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "SI"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "NO"
                            }
                        }
                    ]
                }
            }
        });
    return data;
    
}

// lista
function SampleList(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",  
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "Servicios tecnicos e insumos"
                },
                "body": {
                    "text": "Aeleciona una de las opciones de la lista"
                },
                "footer": {
                    "text": "<Footer Message>"
                },
                "action": {
                    "button": "ver opciones",
                    "sections": [
                        {
                            "title": "Realizar nuevo pedido",
                            "rows": [
                                {
                                    "id": "sst",
                                    "title": "Solicitar nuevo servicio",
                                    "description": "Solicita técnico para tu equipo"
                                },
                                {
                                    "id": "sinsumos",
                                    "title": "Solicitar insumos",
                                    "description": "Solicita toner para tu equipo"
                                }
                            ]
                        },
                        {
                            "title": "Ver estado de pedido",
                            "rows": [
                                {
                                    "id": "st",
                                    "title": "Servicios tecnicos",
                                    "description": "Puedes ver el estado de tu solicitud de tecnico"
                                },
                                {
                                    "id": "insumos",
                                    "title": "Insumos",
                                    "description": "Puedes ver el estado de tu pedido"
                                }
                            ]
                        }
                    ]
                }
            }
        });
    return data;
    
}

// ubicacion
// lista
function SampleLocation(number){
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "location",  
            "location": {
                "latitude":"-34.64033585196683 ",
                "longitude":"-58.38030781045057",
                "name":"CBCGROUP",
                "address":"ARcamendia 670 CABA"
            }
        });
    return data;
    
}

module.exports={
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}
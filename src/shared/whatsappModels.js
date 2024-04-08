

// texto
function MessageText(textResponse, number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                'preview_url': true,
                "body": textResponse
            },
            "type": "text"
        });
    return data;

}

function MessageList(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "✅ En que te podemos ayudar"
                },
                "body": {
                    "text": "Seleciona una de las opciones de la lista"
                },

                "action": {
                    "button": "ver opciones 🔢",
                    "sections": [
                        {
                            "title": "Realizar nuevo pedido",
                            "rows": [
                                {
                                    "id": "sst",
                                    "title": "Nuevo Servicio Técnico",
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
                            "title": "Datos importates",
                            "rows": [
                                {
                                    "id": "ubi",
                                    "title": "Ubicació de la empresa",
                                    "description": "Visitanos con cita previa"
                                },
                                {
                                    "id": "contacto",
                                    "title": "Telefono de contacto",
                                    "description": "Habla con nuestro personal"
                                }
                            ]
                        }
                    ]
                }
            }
        });
    return data;

}

function NewStButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Selecciona una opción"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001-st",
                                "title": "Mancha la hoja"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002-st",
                                "title": "Traba las hojas"
                            }
                        }
                    ]
                }
            }
        });
    return data;

}
function NewTonerButtons(number) {
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Selecciona la cantidad"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001-tn",
                                "title": "1"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002-tn",
                                "title": "2"
                            }
                        }
                    ]
                }
            }
        });
    return data;

}
function Location(number){
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


module.exports = {
    MessageText,
    MessageList,
    NewStButtons,
    NewTonerButtons,
    Location
}
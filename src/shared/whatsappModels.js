

// texto
function MessageText(textResponse, number){
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

function MessageList(number){
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

function NewStButtons(number){
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
                                "id": "001",
                                "title": "Mancha la hoja"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "Traba las hojas"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "003",
                                "title": "Traba las hojas"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "004",
                                "title": "No enciende"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "005",
                                "title": "Otros"
                            }
                        }
                    ]
                }
            }
        });
    return data;
    
}
function NewTonerButtons(number){
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
                                "id": "001",
                                "title": "1"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "2"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "003",
                                "title": "3"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "004",
                                "title": "No enciende"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "005",
                                "title": "Otros"
                            }
                        }
                    ]
                }
            }
        });
    return data;
    
}


module.exports = {
    MessageText,
    MessageList, 
    NewStButtons,
    NewTonerButtons
}
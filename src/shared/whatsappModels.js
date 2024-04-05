

// texto
function MessageText(textResponse, number){
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


module.exports = {
    MessageText,MessageList
}
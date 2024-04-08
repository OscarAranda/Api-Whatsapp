const whatsappModel = require('./whatsappModels');
const whatsappService = require('../services/whatsapp.service');

async function Process(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];
    // if message in
    if (textUser.includes('hola')) {
        // answer
        var model = whatsappModel.MessageText('Hola, un gusto saludarte!', number);
        models.unshift(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);

    } else if (textUser.includes('gracias')) {
        var model = whatsappModel.MessageText('Gracias a ti por comunicarte!', number);
        models.push(model);

    } else if (textUser.includes('adios') ||
        textUser.includes('chau') ||
        textUser.includes('bye')) {
        var model = whatsappModel.MessageText('Chau, hasta la proxima!', number);
        models.push(model);

    } else if (textUser.includes('técnico')) {
        var model = whatsappModel.NewStButtons(number);
        models.push(model);

    } else if (textUser.includes('insumos')) {
        var model = whatsappModel.NewTonerButtons(number);
        models.push(model);

    } else if (textUser.includes('empresa')) {
        var model = whatsappModel.Location(number);
        models.push(model);

    }else if (textUser.includes('contacto')) {
        var model = whatsappModel.MessageText('*Solo llamadas:*\n 43414840',number);
        models.push(model);

    } else {
        var model = whatsappModel.MessageText('No comprendo lo que dices', number);
        models.push(model);
    }
    for (let model of models) {
        await whatsappService.SendMessageWhatsApp(model);
    }
}

module.exports = {
    Process,

}
const { OpenAI } = require('openai');
require('dotenv').config()

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY })

async function GetMessageChatGPT(text) {

    try {


        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-instruct",
            messages:[
                {
                    role:'user',
                    content: text
                }
            ]
        });

        if ( response && response.data && response.data.choices && response.data.choices.length > 0) {
            const generatedText = response.data.choices[0].text;
            return generatedText;
        }
        console.log('Respuestas: ' + completion.choices[1])
        return null

    } catch (error) {
        console.error('hubo error en la peticion OpenAI API', error)
        return null;
    }




}

module.exports = {
    GetMessageChatGPT
}
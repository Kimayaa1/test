import { Groq } from 'groq-sdk';

const groqinstance = new Groq({
    apiKey: "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", dangerouslyAllowBrowser: true 
});

export async function sendMessageToGroq(message) {
    const res = await groqinstance.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: "user", content: message }], 
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0 
    });

    return res.choices[0].message.content; 
}

import { Configuration, OpenAiApi } from "openai"


// Initialize openai
const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAiApi(configuration)


// main function
export async function extractCompetitors(query:string): Promise<string[]> {
    try {
        // TODO: prompt-engineering optimiazation
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo", 
            prompt: `Given the query "${query}", list potential competitors:`,
            max_tokens: 100,
            max_tokens: 100,
            temperature: 0.5,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        })
        
        const competitors = response.data.choices[0].text.split(',').map(s = > s.trim())
        console.log('test-competitors',competitors)
        return competitors

    } catch (error) {
        console.error("Failt to extract competitors from GPT-4", error)
        throw error
    }

}
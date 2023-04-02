import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion(prompt: string) {
  console.log(prompt);
  const gptAnswer = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 2048,
    prompt: prompt,
    temperature: 0.5,
    n: 1,
  });
  console.log(gptAnswer.data);

  let response = gptAnswer.data.choices[0].text;
  response = response?.trim();
  response = response?.split("\n\n").join("\n");
  let lines = response?.split("\n");
  if (lines === undefined) return;
  let title = lines[0].replace(/\\?["\\:]/g, "");
  let description = lines.slice(1).join("\n").replaceAll("\n", "");
  title = title.trim();
  return { title, description };
}

export default runCompletion;

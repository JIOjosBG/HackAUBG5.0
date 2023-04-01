import openai
import os

# Set up the OpenAI API client
openai.api_key = "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"
model_engine = 'text-davinci-003'
prompt = input()
gpt_answer = openai.Completion.create(
    engine = model_engine,
    prompt = prompt,
    max_tokens = 1024,
    n = 1,
    stop = None,
    temperature = 0.5
)
response = gpt_answer.choices[0].text
print(response)
prompt2 = input() + response

gpt_answer2 = openai.Completion.create(
    engine=model_engine,
    prompt=prompt2,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5
)
response2 = gpt_answer2.choices[0].text
print(response2)
import openai
import os

# Set up the OpenAI API client
openai.api_key = "<your_api_key>"
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
response = response.strip('\n')
response = '\n'.join(response.split("\n\n"))
lines = response.split('\n')
title = lines[0]
description = '\n'.join(lines[1:])
title = title.strip('"')
print(f'Title - {title}')
print(f'Description - {description}')

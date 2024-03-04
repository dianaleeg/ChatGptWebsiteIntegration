const express = require('express');
const app = express();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/generate-text', async (req, res) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": "Create a list of 8 questions for an interview with a science fiction author."
        }
      ],
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1,
    });

    // Check if response.choices[0].message.content exists before sending it
    if (response.choices[0].message.content) {
      const generatedText = response.choices[0].message.content;
      res.json({ generatedText });
    } else {
      res.status(500).json({ error: "Invalid response structure" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const Openai = require('openai');

// Set up your OpenAI API key
const openai = new Openai('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'); // Replace with your OpenAI API key


// Define the parameters for the ChatGPT API
const data = {
  prompt: 'You: Hello\nUser: How can I use markdown with ChatGPT?',
  temperature: 0.8,
  max_tokens: 100
};

// Call the ChatGPT API
openai.createCompletion({ model: 'text-davinci-002', ...data }) // Specify the model as 'text-davinci-002' for gpt-3.5-turbo
  .then(responseData => {
    // Extract the generated message from the API response
    const generatedMessage = responseData.choices[0].text;

    // Format the generated message as markdown with smooth text display
    const markdownFormatted = `ChatGPT: \`${generatedMessage}\``;

    // Print or use the markdown formatted output as needed
    console.log(markdownFormatted);
  })
  .catch(error => console.error(error));

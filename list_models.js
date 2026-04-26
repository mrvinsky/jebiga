const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyD5nrl_PlTm8FMN0aF7ExDxbeFUomAcNVU';
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    if (data.models) {
        console.log("Available models:");
        data.models.forEach(m => console.log(m.name));
    } else {
        console.log("Response:", data);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
run();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyD5nrl_PlTm8FMN0aF7ExDxbeFUomAcNVU');
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello");
    console.log("Response from gemini-1.5-flash:", result.response.text());
  } catch (e) {
    console.error("Error with gemini-1.5-flash:", e.message);
  }
}
run();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyD5nrl_PlTm8FMN0aF7ExDxbeFUomAcNVU');
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
    const result = await model.generateContent("Hello");
    console.log("Response:", result.response.text());
  } catch (e) {
    console.error("Error with gemini-3.1-flash-lite-preview:", e);
  }
}
run();

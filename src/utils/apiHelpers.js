export const enhancePrompt = async (input) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_HF_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `Enhance this prompt: ${input}`
      })
    }
  );

  const data = await response.json();
  return data[0]?.generated_text || "No response";
};
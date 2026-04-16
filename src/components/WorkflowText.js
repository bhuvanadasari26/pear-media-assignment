import { useState } from "react";

function WorkflowText() {
  const [input, setInput] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [image, setImage] = useState("");

  const handleEnhance = () => {
    // enhance text
    const text = input + " in cinematic lighting, ultra HD, detailed";
    setEnhanced(text);

    // generate dummy image
    setImage("https://picsum.photos/300");
  };

  return (
    <div>
      <h2>Text Workflow</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter prompt"
      />

      <br /><br />

      <button onClick={handleEnhance}>
        Enhance + Generate Image
      </button>

      <br /><br />

      {enhanced && (
        <textarea
          value={enhanced}
          readOnly
          rows="5"
          cols="50"
        />
      )}

      <br /><br />

      {image && (
        <img src={image} alt="generated" />
      )}
    </div>
  );
}

export default WorkflowText;
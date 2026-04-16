import { useState } from "react";

function WorkflowImage() {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  const handleAnalyze = () => {
    setResult("Detected: objects, colors, and style in the image.");
  };

  return (
    <div>
      <h2>Image Workflow</h2>

      <input type="file" onChange={handleUpload} />

      <br /><br />

      {preview && <img src={preview} alt="preview" width="200" />}

      <br /><br />

      <button onClick={handleAnalyze}>Analyze Image</button>

      <br /><br />

      {result && <p>{result}</p>}
    </div>
  );
}

export default WorkflowImage;
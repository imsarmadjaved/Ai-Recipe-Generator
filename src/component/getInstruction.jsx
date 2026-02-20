import ReactMarkdown from "react-markdown";
function GetInstruction({ recipe }) {
  return (
    <div className="suggested-recipe-container">
      <h2>AI Chef Recommended:</h2>

      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}

export default GetInstruction;

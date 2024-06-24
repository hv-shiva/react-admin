import React, { useState } from "react";
import FileComponent from "./FileComponent";

const ParentFileComponent: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string>("");

  const handleSetPath = (path: string) => {
    setSelectedPath(path);
    console.log(`Path selected: ${path}`);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <FileComponent setPathSelected={handleSetPath} type="image/png" />
      <p>Selected Path: {selectedPath}</p>
    </div>
  );
};

export default ParentFileComponent;

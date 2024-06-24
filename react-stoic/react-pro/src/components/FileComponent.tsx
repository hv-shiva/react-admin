import React from "react";

interface FileProps {
  setPathSelected: (path: string) => void;
  type: string;
}

const FileComponent: React.FC<FileProps> = ({ setPathSelected, type }) => {
  const handleClick = () => {
    const path = "/some/path";
    setPathSelected(path);
  };

  return (
    <div>
      <p>Type: {type}</p>
      <button onClick={handleClick}>Select Path</button>
    </div>
  );
};

export default FileComponent;

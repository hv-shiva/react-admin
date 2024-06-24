// ParentComponent.tsx
import React from "react";
import MyComponent from "./MyComponent";

const ParentComponent: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <MyComponent title="Hello, World!" onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

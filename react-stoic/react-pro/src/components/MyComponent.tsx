// MyComponent.tsx
import React from "react";

interface Test {
  title: string;
  onClick: () => {void};
}

const MyComponent: React.FC<Test> = ({ title, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default MyComponent;

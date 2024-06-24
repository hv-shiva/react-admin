import Hello from "./components/Hello";
import ParentComponent from "./components/ParentComponent";
import ParentFileComponent from "./components/ParentFileComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentFileComponent />
    </div>
  );
}

export default App;

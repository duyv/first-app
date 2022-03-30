import "./App.css";
import ProcessBar from "./components/processbar";
import ProcessBarClass from "./components/processbar/classComponent";

function App() {
  let buttonData = [];
  for (let i = 1; i < 10; i++) {
    buttonData.push(i);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container"></div>

        <ProcessBar />
        <ProcessBarClass />
        {/* <Random /> */}
      </header>
    </div>
  );
}

export default App;

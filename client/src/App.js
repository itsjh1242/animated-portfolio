import "./App.css";
// Global Style
import { GlobalStyle } from "./styles/GlobalStyle";
import MouseTracker from "./function/Cursor";

function App() {
  return (
    <>
      <GlobalStyle />
      <MouseTracker />
      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  );
}

export default App;

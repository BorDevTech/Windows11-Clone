import "./App.css";
import VirtualDisplay from "./Components/VirtualDisplay/VirtualDisplay";

function App() {
  return (
    <>
      <VirtualDisplay />
      <div style={{ border: "1px solid red" }}>
        Display
        <div style={{ border: "1px solid orange" }}>Screen</div>
        <div style={{ border: "1px solid green" }}>
          Taskbar
          <div style={{ border: "1px solid blue" }}>Taskbar App</div>
          <div style={{ border: "1px solid indigo" }}>Taskbar App</div>
          <div style={{ border: "1px solid violet" }}>Taskbar App</div>
          <div style={{ border: "1px solid pink" }}>Taskbar App</div>
          <div style={{ border: "1px solid grey" }}>Taskbar App</div>
        </div>
      </div>
    </>
  );
}

export default App;

import time from "/time.jpg";
import "./App.css";
import Clock from "./Clock.jsx";

function App() {
  return (
    <>
      <div>
        <img src={time} className="logo" alt="time logo" />
        <p>This image is generated using Bard.</p>
      </div>
      <h1>World Clock</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Clock timeZone="US/Pacific" />
        <Clock timeZone="Asia/Singapore" />
        <Clock timeZone="Japan" />
        <p>{"Hello world"}</p>
      </div>
    </>
  );
}

export default App;

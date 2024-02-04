import time from "/time.jpg";
import "./App.css";
import WorldClock from "./WorldClock.jsx";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";

import { useState } from "react";

import { allTimeZones } from "./allTimeZones.js";

function App() {
  const [clockData, setClockData] = useState(["Asia/Singapore"]);

  const [option, setOption] = useState(allTimeZones[0]);

  return (
    <>
      <div>
        <Figure>
          <Figure.Image className="w-25" alt="time logo" src={time} />
          <Figure.Caption>This image is generated using Bard.</Figure.Caption>
        </Figure>
      </div>
      <h3>World Clock</h3>
      <Card className="mt-3 d-flex flex-column align-items-center">
        <Form.Select
          className="w-50"
          onChange={(e) => setOption(e.target.value)}
        >
          {allTimeZones.map((timeZone, i) => {
            return (
              <option key={i} value={timeZone}>
                {timeZone}
              </option>
            );
          })}
        </Form.Select>
        <Button
          variant="primary"
          className="w-50 mt-3"
          onClick={() => setClockData([...clockData, option])}
        >
          Add timezone now
        </Button>
      </Card>
      <Card className="mt-3">
        <WorldClock clockData={clockData} />
      </Card>
    </>
  );
}

export default App;

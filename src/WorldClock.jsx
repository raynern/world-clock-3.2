import Clock from "./Clock.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WorldClock({ clockData }) {
  const clockList = clockData.map((timeZone, i) => {
    return (
      <Row key={i}>
        <Col sm={6}>{timeZone}</Col>
        <Col sm={6}>
          <Clock timeZone={timeZone} />
        </Col>
      </Row>
    );
  });
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <p style={{ fontWeight: "bold" }}>Timezone</p>
        </Col>
        <Col sm={6}>
          <p style={{ fontWeight: "bold" }}>Time</p>
        </Col>
      </Row>
      {clockList}
    </Container>
  );
}

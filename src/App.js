import React from "react";
import "./App.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayTable from "./components/DisplayTable";

//  importing data from data.json file
import json from "./data.json";

// I've selected recharts as charting library
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// we are pulling parent element from array
const [parent] = json;
const data = parent.response.data;

console.log(json);

function App() {
  return (
    <div className="App">
      <h1>CB Dev Test</h1>
      <Container>
        <Row>
          <Col>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              {/* the graph needs to be plotted by the PD value (dataKey="PD") */}
              <Line type="monotone" dataKey="PD" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              {/* label for each point needs to be the Rating */}
              <XAxis dataKey="Rating" />
              <YAxis />
              <Tooltip />
            </LineChart>

            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              {/* the graph needs to be plotted by the LGD value  (dataKey="LGD") */}
              <Line type="monotone" dataKey="LGD" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              {/* label for each point needs to be the LGD */}
              <XAxis dataKey="LGD" />
              <YAxis />
              <Tooltip />
            </LineChart>
            <DisplayTable />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Data</Card.Title>
              <Card.Text>Reference data</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

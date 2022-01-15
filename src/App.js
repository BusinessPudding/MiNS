import React from "react";
import "./styles.css";

import ReactFlow from "react-flow-renderer";

const elements = [
  {
    id: "1",
    type: "input",
    data: { label: "Master Node" },
    position: { x: 50, y: 50 },
  },
];

const graphStyles = { width: "100%", height: "500px" };

const BasicGraph = () => <ReactFlow elements={elements} style={graphStyles} />;

export default function App() {
  return <BasicGraph />;
}

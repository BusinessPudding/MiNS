import React, { useCallback, useState } from "react";
import "./styles.css";

import ReactFlow from "react-flow-renderer";

const json = require("./NodeDate.json");
const initialElements = [
  {
    id: json.id,
    type: json.type, // input node
    data: { label: json.data.label },
    position: { x: json.position.x, y: json.position.y },
  },
];

export default function App() {
  const [els, setEls] = useState(initialElements);
  const addNode = useCallback(() => {
    let body = Math.random() * 1500;
    setEls((els) => {
      return [
        ...els,
        {
          id: body,
          position: { x: Math.random() * 1500, y: Math.random() * 500 },
          data: { label: body },
        },
      ];
    });
  }, []);

  const addEdge = useCallback(({ source, target }) => {
    setEls((els) => {
      console.log(source, target);
      return [
        ...els,
        {
          id: Math.random(),
          source,
          target,
        },
      ];
    });
  }, []);

  return (
    <div className="App">
      <div style={{ height: 500 }}>
        <ReactFlow elements={els} onConnect={addEdge} />
      </div>
      <button onClick={addNode}>Add</button>
    </div>
  );
}

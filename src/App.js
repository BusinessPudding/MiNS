import React, { useCallback, useState } from "react";
import "./styles.css";

import ReactFlow from "react-flow-renderer";
const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: body },
    position: { x: 100, y: 0 },
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

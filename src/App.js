import React, { useCallback, useState } from "react";
import "./styles.css";

import ReactFlow, { MiniMap } from "react-flow-renderer";

const json = require("./NodeDate.json");
const initialElements = [
  {
    id: json.id,
    type: json.type, // input node
    data: { label: json.data.label },
    position: { x: json.position.x, y: json.position.y },
  },
  {
    id: json.id,
    type: json.type, // input node
    data: {
      label: json.data.label,
    },
    position: { x: 10, y: 10 },
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
          data: { label: json.data.label },
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

  const FlowWithMiniMap = () => (
    <ReactFlow elements={els}>
      <MiniMap
        nodeColor={(node) => {
          switch (node.type) {
            case "input":
              return "red";
            case "default":
              return "#00ff00";
            case "output":
              return "rgb(0,0,255)";
            default:
              return "#eee";
          }
        }}
        nodeStrokeWidth={3}
      />
    </ReactFlow>
  );

  return (
    <div className="App">
      <div style={{ height: 500 }}>
        <ReactFlow elements={els} onConnect={addEdge}>
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.style?.background) return n.style.background;
              if (n.type === "input") return "#0041d0";
              if (n.type === "output") return "#ff0072";
              if (n.type === "default") return "#1a192b";

              return "#eee";
            }}
            nodeColor={(n) => {
              if (n.style?.background) return n.style.background;

              return "#fff";
            }}
            nodeBorderRadius={2}
          />
        </ReactFlow>
      </div>
      <button onClick={addNode}>Add</button>
    </div>
  );
}

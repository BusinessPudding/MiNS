import React, { useCallback, useState } from "react";
import "./styles.css";
import ReactFlow, { MiniMap } from "react-flow-renderer";
const json = require("./NodeDate.json");
// 以下をコメントアウトすると動作する
const export_function = require("./gettweet.js");
const initialElements = [
  {
    id: 1,
    type: json.type, // input node
    data: { label: "旅行" },
    position: { x: 100, y: 100 },
  },
  {
    id: 2,
    type: json.type, // input node
    data: { label: "日本" },
    position: { x: 300, y: 100 },
  },
  {
    id: 4,
    type: json.type, // input node
    data: { label: "箱根" },
    position: { x: 500, y: 100 },
  },
  // {
  //   id: Math.random(),
  //   type: json.type, // input node
  //   data: {
  //     label: json.data.label,
  //   },
  //   position: { x: 10, y: 10 },
  // },
];

export default function App() {
  const [els, setEls] = useState(initialElements);
  const addNode = useCallback(() => {
    let body = Math.random() * 1500;
    let tweet = export_function.export_print();
    setEls((els) => {
      return [
        ...els,
        {
          id: body,
          position: { x: Math.random() * 1500, y: Math.random() * 500 },
          data: { label: tweet }, // labelに"hoge"のように普通の文字列を渡すと動作する
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

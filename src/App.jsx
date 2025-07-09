import { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  addEdge,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

// renders
import ModalsRender from "@renders/ModalsRender";

// components & nodes 
import Statusbar from "@components/Statusbar";


import Battery from "@nodes/Battery";
import LedNode from "@nodes/LedNode";

const nodeTypes = {
  battery: Battery,
  led: LedNode,
};

const initialNodes = [
  {
    id: "battery-1",
    type: "battery",
    data: {},
    position: { x: 300, y: 100 },
  },

  {
    id: "led-1",
    type: "led",
    data: { on: false },
    position: { x: 400, y: 100 },
  },

    {
    id: "led-2",
    type: "led",
    data: { on: false },
    position: { x: 200, y: 200 },
  },

];

const initialEdges = [];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);



  const { fitView } = useReactFlow();

  useEffect(() => {
    fitView();
  }, [fitView]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        const newEdges = addEdge(params, eds);

        const connectionsByNode = {};
        newEdges.forEach((edge) => {
          if (!connectionsByNode[edge.target]) {
            connectionsByNode[edge.target] = [];
          }
          connectionsByNode[edge.target].push(edge);
        });

        setNodes((nds) =>
          nds.map((node) => {
            if (node.type === "led") {
              const connections = connectionsByNode[node.id] || [];
              const hasAnode = connections.some(
                (e) => e.targetHandle === "anode" && e.source.includes("battery") && e.sourceHandle === "positive"
              );
              const hasCathode = connections.some(
                (e) => e.targetHandle === "cathode" && e.source.includes("battery") && e.sourceHandle === "negative"
              );

              return {
                ...node,
                data: {
                  ...node.data,
                  on: hasAnode && hasCathode,
                },
              };
            }
            return node;
          })
        );

        return newEdges;
      });
    },
    [setEdges, setNodes]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      <Statusbar />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >

        <ModalsRender />
    
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
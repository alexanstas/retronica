import { useState } from "react";
import { Handle, Position } from "reactflow";

// components
import NodeBtn from "@components/NodeBtn";

const Battery = () => {

  const [rotated, setRotated] = useState(true)
  const [options, setOptions] = useState(true)
  const [infos, setInfos] = useState(true)

  return (
    <div className="node battery">
      <Handle type="source" position={Position.Top} id="positive" className="handle" />
      <Handle type="source" position={Position.Bottom} id="negative" className="handle" />


      {/* battery buttons */}
      <div className="buttons">
        <NodeBtn ic="la-cog" clb="" ttl="Options" />
        <NodeBtn ic="la-info" clb="" ttl="Show / Hide Infos" />
        <NodeBtn ic="la-trash" clb="" ttl="Delete Component" />
      </div>

      {infos && (
        <div className="infos">
          <div className="name">Battery</div>
          <div className="voltage">1.5 Volt</div>
        </div>
      )}


    </div>
  );
};



export default Battery;

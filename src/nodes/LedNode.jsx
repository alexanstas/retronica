import { useState } from "react";
import { Handle, Position } from "reactflow";

// components
import NodeBtn from "@components/NodeBtn";


const LedNode = ({ data }) => {

  const [color, setColor] = useState('blue')
  const [colorOpts, setColorOpts] = useState(false)


  // change led color
  const changeColor = (newcolor) => {
    setColor(newcolor)
  }

  // show or hide options
  const toggleColors = () => {
    setColorOpts(!colorOpts)
  }

  return (
    <div className={`led led-${color}`} data-status={data.on ? 'on' : 'off'}>
      <Handle type="target" position={Position.Left} id="anode" />
      <Handle type="target" position={Position.Right} id="cathode" />


      {/* led buttons */}
      <div className="buttons">
        <NodeBtn ic="la-brush" clb={toggleColors} ttl="Show / Hide Infos" />
        <NodeBtn ic="la-trash" clb="" ttl="Delete Component" />
      </div>

      {/* available led colors */}
      <div className="colors" data-show={colorOpts ? true : false}>
        <div className="color red" onClick={() => { changeColor('red') }} />
        <div className="color blue" onClick={() => { changeColor('blue') }} />
        <div className="color yellow" onClick={() => { changeColor('yellow') }} />
      </div>


    </div>
  );
};

export default LedNode;

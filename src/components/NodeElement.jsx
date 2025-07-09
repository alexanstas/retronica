import React from 'react'

function NodeElement({ data }) {
  return (
    <div className="nodeitem">

      {/* component image */}
      <div className="image battery">

      </div>
      {/* 
    component details */}
      <div className="details">
        <div className="component">{data.name}</div>
        <div className="info">{data.info}</div>
      </div>

      {/* add button */}
      <div className="addbtn">
        <i class="las la-plus"></i>
      </div>

    </div>
  )
}

export default NodeElement
import React from 'react'

function NodeBtn({ic,clb,ttl}) {

    return (
        <div className="nodebutton" onClick={clb} title={ttl}>
           <i className={`la ${ic}`}></i>
        </div>
    )
}

export default NodeBtn
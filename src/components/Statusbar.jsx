import React from 'react'

import AddButton from './AddButton'

import { openModal } from '../store/slices/modalSlice'
import { useDispatch } from 'react-redux'

function Statusbar() {

  const dispatch = useDispatch()


  const openNewModal = () => {
    dispatch(openModal('newComponentModal'))
  }


  return (
    <div className="statusbar">

      <div className="logoarea">
        <div className="icon"></div>
        <div className="name">Retronica</div>
      </div>

      {/* link icons */}
      <div className="buttons">
      
      </div>



    </div>
  )
}

export default Statusbar
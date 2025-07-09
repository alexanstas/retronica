import { useSelector, useDispatch } from 'react-redux';

import { CloseIcon } from '../../assets/scss/icons/CloseIcon'
import NodeElement from '@components/NodeElement'


const myNodes = [
    {
        id: 1,
        name: '1.5v Battery'
    },

    {
        id: 2,
        name: '3mm Led'
    }
]


function NewComponent() {

    const isOpen = useSelector(state => state.modals.newComponentModal);
    const dispatch = useDispatch();

    // close modal
    const closeMe = () => {
        dispatch({ type: 'modals/closeModal', payload: 'newComponentModal' });
    }


    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="overlay"></div>

            {/* components list window */}
            <div className="nodeslist">



                <div className="closer" onClick={closeMe}>
                    <CloseIcon />
                </div>

                <div className="list">
                    {myNodes.map((node => {
                        return <NodeElement key={node.id} data={node} />
                    }))}

                </div>

            </div>
        </>
    )
}

export default NewComponent;
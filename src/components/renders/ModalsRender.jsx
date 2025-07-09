import { useSelector } from 'react-redux';

// import modals components
import NewComponent from '@modals/NewComponent';

const MODAL_COMPONENTS = {
  newComponentModal: NewComponent,
 
};

const ModalsRender = () => {
  const modalStates = useSelector((state) => state.modals);

  const activeModalKey = Object.keys(modalStates).find((key) => modalStates[key]);

  if (!activeModalKey) return null;  

  const ActiveModalComponent = MODAL_COMPONENTS[activeModalKey];

  return ActiveModalComponent ? <ActiveModalComponent /> : null;
};

export default ModalsRender;

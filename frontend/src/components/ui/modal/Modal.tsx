import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';


// I kind of forgot what this code does. I think I stole it from somewhere.
function usePortal(id: string) {
  const rootRef = useRef(document.createElement('div'));

  useEffect(() => {
    const parentElem = document.querySelector(`#${id}`);
    parentElem.appendChild(rootRef.current);
    return () => {
      rootRef.current.remove();
    }
  }, []);

  return rootRef.current;
}

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  children
}) => {
  const target = usePortal('modal-root');
  return ReactDOM.createPortal(children, target);
}

export default Modal;

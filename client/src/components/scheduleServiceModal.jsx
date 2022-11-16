import React from "react";

const Modal = ({ setIsOpen }) => {
  return 
  <>
  <button className="open-modal" onClick={() => setIsOpen(false)}></button>
  <div className='service-modal'>
      <ul>
          
      </ul>
  </div>;
  </>
};

export default Modal;
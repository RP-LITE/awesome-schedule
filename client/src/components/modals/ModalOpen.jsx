import React, { useState } from "react";
import ModalBody from "./ModalBody";
import SignUpForm from "./SignUpForm"

function ModalOpen({children, Modal}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='scheduleApp'>
      <button
        className='openModalBtn'
        onClick={() => {
          setModalShow(true);
        }}
      >
        {children}
      </button>
      {modalShow && <Modal closeModal={setModalShow} />}
    </div>
  );
}

export default ModalOpen;

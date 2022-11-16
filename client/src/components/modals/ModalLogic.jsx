import React, { useState } from "react";
import ServiceModal from "./ServiceModal";

function Modal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='scheduleApp'>
      <button
        className='openModalBtn'
        onClick={() => {
          setModalShow(true);
        }}
      >
        Schedule Appointment!
      </button>
      {modalShow && <ServiceModal closeModal={setModalShow} />}
    </div>
  );
}

export default Modal;

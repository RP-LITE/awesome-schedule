import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./modal.css";

const ModalTemp = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='sidebarlink sidebarlink3'
        type='button'
        onClick={() => setShowModal(true)}
      >
        {props.title}
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-grey bg-opacity-60 w-50'>
            <div className='modalContainer'>
              <div className='relative w-full my-6 mx-auto max-w-3xl fixed px-4 py-2'>
                {/* <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'> */}
                <div className='flex items-start justify-between border-solid border-gray-300 pb-4  rounded-t'>
                  <button
                    className='bg-transparent border-0 text-black float-right rounded-full'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-black opacity-7 h-6 w-6 text-xl p-1 rounded-full'>
                      x
                    </span>
                  </button>
                </div>
                {props.children}
                <div className='flex items-center justify-end border-solid border-blueGray-200 rounded-b'></div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
      ) : null}
    </>
  );
};

export default ModalTemp;

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const ModalTemp = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='sidebarlink sidebarlink3 mainButton'
        type='button'
        onClick={() => setShowModal(true)}
      >
        {props.title}
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-grey w-50'>
            <div className='modalContainer'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl fixed'>
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                    <button
                      className='bg-transparent border-0 text-black float-right'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='text-black opacity-7 h-6 w-6 text-xl block bg-grey-400 py-0 rounded-full'>
                        x
                      </span>
                    </button>
                  </div>
                  {props.children}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalTemp;

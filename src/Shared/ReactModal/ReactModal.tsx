import React from "react";
import Modal from "react-modal";
import Book from "../../Pages/Home/TopBooks/Book";
import { HiOutlineX } from "react-icons/hi";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -30%)",
    zIndex: 99999,
    width: '400px',
    // backgroundColor: 'transparent'
  },
};

const ReactModal = ({modalIsOpen, setIsOpen, book }: any) => {
  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><HiOutlineX className="text-3xl hover:text-red-600"/></button>
        <Book {...book}/>
      </Modal>
    </div>
  );
};

export default ReactModal;

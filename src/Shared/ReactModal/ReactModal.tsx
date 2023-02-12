import React from "react";
import Modal from "react-modal";
import Book from "../../Pages/Home/TopBooks/Book";
import { HiOutlineX } from "react-icons/hi";
import { Book as BookType } from "./Book";

interface ReactModalProps {
  modalIsOpen: boolean;
  setIsOpen: (state: boolean) => void;
  books?: any[];
}

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    zIndex: 99999,
    width: "400px",
  },
};

const ReactModal: React.FC<ReactModalProps> = ({ modalIsOpen, setIsOpen, books }) => {
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
        <button onClick={closeModal}>
          <HiOutlineX className="text-3xl hover:text-red-600" />
        </button>
        {books?.map((book: BookType) => (
          <Book key={book.id} {...book} />
        ))}
      </Modal>
    </div>
  );
};

export default ReactModal;

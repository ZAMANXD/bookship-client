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
    width: "1280px",
    // height: "100%"
  },
};

const ReactModal: React.FC<ReactModalProps> = ({
  modalIsOpen,
  setIsOpen,
  books,
}) => {
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
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#34315D] ml-5">
            Search Result
          </h2>
          <button onClick={closeModal}>
            <HiOutlineX className="text-3xl hover:text-red-600 " />
          </button>
        </div>
        {
          <div className="grid grid-cols-5 gap-5 mt-5">
            {books?.map((book: BookType) => (
              <Book key={book.id} {...book} />
            ))}
          </div>
        }
      </Modal>
    </div>
  );
};

export default ReactModal;

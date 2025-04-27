import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import DetailsContainer from "./DetailsContainer";
import Style from "../styles/Details.style";

const DetailsModal = ({ medication, onClose }) => {
  console.log(medication);

  const dialogRef = useRef();

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [onClose]);

  if (!medication) return null;

  return (
    <Style>
      <div className="overlay">
        <dialog open className="modal" ref={dialogRef}>
          <button className="btn-close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="details">
            <DetailsContainer medication={medication} />
          </div>
        </dialog>
      </div>
    </Style>
  );
};

export default DetailsModal;

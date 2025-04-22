import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const InfoAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWarning = title.includes("Warning");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header">
        <button className="btn-toggle" onClick={toggleAccordion}>
          <h4 className={`${isWarning ? "warning-title" : "usage-title"}`}>
            {title}
          </h4>
          <p className="icon">{isOpen ? <HiMinus /> : <HiPlus />}</p>
        </button>
      </div>
      {isOpen && (
        <div
          className={`accordion-content ${
            isWarning ? "warning-container" : "usage-container"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoAccordion;

import styled from "styled-components";

const Style = styled.aside`
  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dialog[open] {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }
  .modal {
    background: var(--background-secondary-color);
    width: 95vw;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 1rem;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-height: calc(95vh - (var(--nav-height) + var(--footer-height)));
    overflow-y: auto;
  }

  .btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--red-dark);
  }

  .details {
    min-height: calc(65vh - (var(--nav-height) + var(--footer-height)));
    padding: 1rem;
  }
  .title {
    padding: 1rem 0 3rem 0;
  }

  .accordion-header {
    padding-bottom: 1rem;
  }

  .accordion {
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }
  .accordion-content {
    border-radius: var(--border-radius);
    padding: 1rem;
    margin-bottom: 1rem;
    line-height: 1.4;
    letter-spacing: var(--letter-spacing);
    font-size: var(--table-fontsize);
  }

  .warning-title {
    color: var(--red-medium);
  }
  .warning-container {
    border: 1px solid var(--red-medium);
  }

  .usage-title {
    color: var(--green);
  }
  .usage-container {
    border: 1px solid var(--green);
  }

  .secondary-text {
    color: var(--text-secondary-color);
  }

  .btn-toggle {
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    background: transparent;
    color: var(--primary-blue-500);
    cursor: pointer;
    letter-spacing: var(--letter-spacing);
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    vertical-align: middle;
    transition: var(--transition);
    margin-bottom: 1rem;
    padding: 0.75rem;
    &:hover {
      color: var(--primary-blue-700);
      transform: var(--transform);
    }
  }
  .icon {
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
  }
`;
export default Style;

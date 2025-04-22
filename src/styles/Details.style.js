import styled from "styled-components";

const Style = styled.section`
  .page {
    min-height: calc(95vh - (var(--nav-height) + var(--footer-height)));
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

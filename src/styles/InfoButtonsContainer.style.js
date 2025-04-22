import styled from "styled-components";

// make FooterStyle styled component
const Style = styled.section`
  width: 100%;
  .btn-container {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .btn-info {
    border-radius: 0.25rem;
    border: none;
    padding: 0.75rem;
    cursor: pointer;
    transition: var(--transition);
    /* position: relative; */
    background: var(--primary-blue-500);
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35vw;

    &:hover {
      transform: var(--transform);
      background: var(--primary-blue-700);
    }
    &:active {
      transform: scale(98%);
      background: var(--green);
    }
  }

  @media (min-width: 768px) {
    .btn-info {
      width: 30vw;
    }
  }

  @media (min-width: 992px) {
    .btn-info {
      width: 25vw;
    }
    @media (min-width: 1120px) {
      .btn-info {
        width: 20vw;
      }
    }
  }
`;
export default Style;

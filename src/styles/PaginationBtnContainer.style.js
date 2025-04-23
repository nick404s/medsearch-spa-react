import styled from "styled-components";

const Style = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--grey-400);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      transform: var(--transform-translate);
      color: var(--grey-700);
    }
  }
  .active {
    /* background: var(--primary-blue-500);
    color: var(--white); */
    color: var(--primary-blue-500);
    &:hover {
      color: var(--primary-blue-700);
    }
  }
  .prev-btn,
  .next-btn {
    /* background: var(--background-secondary-color); */
    border-color: transparent;
    background: transparent;
    /* border-radius: var(--border-radius); */
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    width: 100px;
    height: 40px;
    color: var(--primary-blue-700);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--primary-blue-900);
      transition: var(--transition);
      transform: var(--transform-translate);
    }
  }

  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;
export default Style;

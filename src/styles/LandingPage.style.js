import styled from "styled-components";

const Style = styled.section`
  .page {
    min-height: calc(95vh - (var(--nav-height) + var(--footer-height)));
    display: grid;
    text-align: center;
  }
  .secondary-text {
    line-height: 1;
    font-size: 1rem;
    color: var(--text-secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  .search-input {
    width: 100%;
    min-width: 20rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid var(--grey-300);
    background: var(--grey-50);
    font-size: 1rem;
    color: var(--text-secondary-color);
    outline: none;
    transition: var(--transition);
    /* text-indent: 10rem; */
    &:focus {
      border-color: var(--primary-blue-500);
      background: transparent;
    }
  }
  .search-select {
    padding: 0.75rem;
    /* border-radius: 0.25rem 0 0 0.25rem;
    border: 1px solid var(--primary-blue-500); */
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--primary-blue-500);
    outline: none;
    transition: var(--transition);
    position: relative;
    /* left: 10rem; */
    cursor: pointer;
    &:hover {
      color: var(--primary-blue-700);
      transform: scale(103%);
    }
  }

  /* search button */
  .search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;

    border: none;
    padding: 0.75rem;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    background: var(--primary-blue-500);
    &:hover {
      transform: scale(103%);
    }
  }

  .search-icon {
    font-size: 24px;
    color: var(--white);
    transition: var(--transition);
  }
  .main-img {
    height: auto;
    width: 40vw;
    display: block;
    margin: 0 auto;
    padding: 0.75rem;
  }

  @media (min-width: 992px) {
    .form {
      display: flex;
      gap: 0;
    }
    .main-img {
      width: 25vw;
    }
    .secondary-text {
      line-height: 2.7;
      font-size: 1.4rem;
    }
    .search-input {
      font-size: 1.2rem;
      text-indent: 10rem;
    }
    .search-select {
      font-size: 1.2rem;
      left: 10rem;
    }
    .search-btn {
      background-color: transparent;
    }
    .search-icon {
      color: var(--primary-blue-500);
      &:hover {
        color: var(--primary-blue-700);
        transform: scale(1.1) translateY(-2px);
      }
    }
  }
`;
export default Style;

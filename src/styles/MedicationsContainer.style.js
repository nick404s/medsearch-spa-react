import styled from "styled-components";

const Style = styled.article`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
  margin: 0 auto;
  min-height: calc(80vh - (var(--nav-height) + var(--footer-height)));
  width: var(--fluid_width);

  .medication-container {
    min-height: calc(75vh - (var(--nav-height) + var(--footer-height)));
    width: var(--fluid_width);
  }
  .search-result {
    padding: 2rem;
  }
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .table-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-column-gap: 1rem;
    gap: 1.2rem;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    background: var(--primary-blue-100);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    /* border: 1px solid var(--green); */
    flex-wrap: wrap;
  }

  .header-row {
    font-weight: bold;
  }
  .medication-row {
    text-transform: capitalize;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    white-space: normal;
    font-size: var(--table-fontsize);
  }
  .link {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 1120px) {
  }
`;
export default Style;

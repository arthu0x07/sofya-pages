import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 3;
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 14.7rem;
  margin-left: 3rem;
  margin-right: 3rem;
  gap: 5.8rem;

  flex-grow: 1;
  flex-shrink: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: stretch;
    margin: 0 0;
    margin-top: 4.8rem;
  }
`;

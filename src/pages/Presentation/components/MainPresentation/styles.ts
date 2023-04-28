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

  gap: 5.8rem;

  flex-grow: 1;
  flex-shrink: 1;
`;

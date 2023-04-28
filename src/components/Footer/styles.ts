import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FooterTitle = styled.h3`
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 2;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: ${({ theme }) => theme.typography.sizes.xsmall};
`;

export const ImagesBackground = styled.div`
  position: absolute;
  z-index: -1;
`;

export const RisesImage = styled.img`
  width: 100vw;
`;

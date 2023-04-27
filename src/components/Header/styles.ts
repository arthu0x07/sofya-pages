import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid #365fd7;

  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;

  padding: 1.5rem 13.6rem;

  display: flex;
  justify-content: space-between;
`;

export const ContainerSettingsLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const ContainerSelectedLanguage = styled.div``;

export const LogoImage = styled.img``;

export const ContainerModal = styled.div.attrs(
  (props: { modalHeight: number, isModalOpen: boolean}) => ({
    modalHeight: props.modalHeight,
    isModalOpen: props.isModalOpen
  })
)`
  display: ${({isModalOpen}) => isModalOpen ? "flex" : "none"};
  flex-direction: column;
  justify-content: flex-start;

  width: 23rem;

  position: absolute;
  z-index: 4;
  bottom: -${({ modalHeight }) => modalHeight / 10 + 3}rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const ModalOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 35px;
`;

export const LanguageImage = styled.img`
  width: 3.9rem;
  height: 2.3rem;
  margin-right: 1.7rem;
`;

export const OptionName = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.large};
  font-weight:  ${({ theme }) => theme.typography.fontWeight.light};
`;

export const Overlay = styled.div.attrs((props: { isModalOpen: boolean }) => ({
  isModalOpen: props.isModalOpen,
}))`
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  width: 200vw;
  height: 200vh;
  opacity: 1;
  background-color: red;
  position: absolute;
  opacity: 0;
  z-index: 3;
`;

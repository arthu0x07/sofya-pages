import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  @media (max-width: 390px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.xx3large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin-top: 6rem;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.sizes.xx2large};
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.sizes.large};
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  margin-top: 5.4rem;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media (max-width: 390px) {
    font-size: ${({ theme }) => theme.typography.sizes.medium};
  }
`;

export const Option = styled.div`
  padding: 1rem 2.8rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: inset 0px 0px 50px ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

export const LinkAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const LinkRouter = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const SocialMedia = styled.section`
  margin-top: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7rem;
  position: relative;
  z-index: 4;
`;

export const SocialMediaOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SocialMediaImage = styled.img`
  width: 4rem;
  height: 4rem;

  @media (max-width: 768px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

export const SocialMediaTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

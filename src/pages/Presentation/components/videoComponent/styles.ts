import styled, { css } from "styled-components";

export const ContainerCardItem = styled.div`
  min-width: 320px;
  max-width: 390px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

export const TitleVideo = styled.h2`
  text-align: start;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.xlarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const ContainerVideo = styled.video`
  margin-top: 0.7rem;
  width: 100%;
  height: 213px;
`;

export const ContainerIframe = styled.source``;

export const ContainerVideoDescription = styled.div`
  max-width: 350px;
  margin-top: 1.2rem;
`;

export const ContainerControls = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ControlImage = styled.img<{ showControls: boolean }>(
  ({ showControls }) => css`
    opacity: ${showControls ? 1 : 0};
    transition: all 0.3s ease-in-out;
  `
);

export const VideoDescription = styled.p`
  text-align: start;
  color: ${({ theme }) => theme.colors.text2};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 2.2rem;
`;

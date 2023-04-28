import { useRef, useState } from "react";

import * as S from "./styles";

import PausedIcon from "/src/assets/images/paused-icon.svg";
import PlayingIcon from "/src/assets/images/playing-icon.svg";
import SofyaLogo from "/src/assets/images/sofya-poster.svg";


interface VideoComponent {
  title: string;
  linkVideo: string;
  description: string;
}

export function VideoComponent({
  title,
  linkVideo,
  description,
}: VideoComponent) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const controlsTimerRef = useRef<number | null>(null);

  const startControlsTime = () => {
    setShowControls(true);

    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }

    controlsTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1500);
  };

  const handlePlayAndPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
      startControlsTime();
    }
  };

  const onVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
    startControlsTime();
  };

  return (
    <S.ContainerCardItem>
      <S.TitleVideo>{title}</S.TitleVideo>

      <S.ContainerVideo
        ref={videoRef}
        onMouseMove={startControlsTime}
        onEnded={() => onVideoEnded()}
        poster={SofyaLogo}
      >
        <S.ContainerIframe src={linkVideo} type="video/mp4"></S.ContainerIframe>
      </S.ContainerVideo>

      <S.ContainerVideoDescription>
        <S.VideoDescription>{description}</S.VideoDescription>
      </S.ContainerVideoDescription>

      <S.ContainerControls>
        <S.ControlImage
          src={isPlaying ? PausedIcon : PlayingIcon}
          onClick={handlePlayAndPause}
          showControls={showControls}
        />
      </S.ContainerControls>
    </S.ContainerCardItem>
  );
}

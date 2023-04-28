import { useContext } from "react";
import { LanguageContext } from "/src/contexts/LanguageProvider";

import * as S from "./styles";
import { VideoComponent } from "../VideoComponent";

export function MainPresentation() {
  const LanguageContextValue: any = useContext(LanguageContext);
  const { screen_apresentation } = LanguageContextValue.selectedLanguage;

  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.ContainerCards>
          {screen_apresentation.cards.map((CardItem: any) => (
            <VideoComponent
              title={CardItem.title}
              linkVideo={CardItem.video}
              description={CardItem.description}
            />
          ))}

          {/*  */}
        </S.ContainerCards>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

// VideoComponent Precisa: Titulo do Video, Link do Video, Descrição do Video

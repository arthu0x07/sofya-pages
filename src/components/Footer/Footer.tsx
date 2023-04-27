import * as S from "./styles.ts";
import RisesBackground from "/src/assets/images/rises-background.svg";

export function Footer() {
  return (
    <S.Container>
      <S.FooterTitle>Sofya © All rights reserved</S.FooterTitle>

      <S.ImagesBackground>
        <S.RisesImage src={RisesBackground} />
      </S.ImagesBackground>
    </S.Container>
  );
}

import * as S from "./styles";

import InstagramIcon from "/src/assets/images/instagram-icon.svg";
import LinkedlnIcon from "/src/assets/images/linkedln-icon.svg";

export function MainHomepage() {
  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.Title>Conheça nosso produto</S.Title>

        <S.Subtitle>Selecione o conteúdo que deseja acessar</S.Subtitle>

        <S.ContainerCards>
          <S.Option>Website</S.Option>
          <S.Option>Apresentação Institucional</S.Option>
          <S.Option>Demonstrações</S.Option>
          <S.Option>Contato</S.Option>
        </S.ContainerCards>

        <S.SocialMedia>
          <S.SocialMediaOption>
            <S.SocialMediaImage alt="" src={InstagramIcon}/>
            <S.SocialMediaTitle>Instagram</S.SocialMediaTitle>
          </S.SocialMediaOption>

          <S.SocialMediaOption>
            <S.SocialMediaImage alt="" src={LinkedlnIcon}/>

            <S.SocialMediaTitle>Linkedin</S.SocialMediaTitle>
          </S.SocialMediaOption>
        </S.SocialMedia>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

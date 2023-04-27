import * as S from "./styles";
import { Link } from "react-router-dom";

import InstagramIcon from "/src/assets/images/instagram-icon.svg";
import LinkedlnIcon from "/src/assets/images/linkedln-icon.svg";

import PortuguesPDF from "/src/assets/pdfs/Sofya-Portugues.pdf";

export function MainHomepage() {
  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.Title>Conheça nosso produto</S.Title>

        <S.Subtitle>Selecione o conteúdo que deseja acessar</S.Subtitle>

        <S.ContainerCards>
          <S.LinkAnchor href="https://www.sofya.ai/" target="_self">
            <S.Option>Website</S.Option>
          </S.LinkAnchor>

          <S.LinkAnchor href={PortuguesPDF} download={true}>
            <S.Option>Apresentação Institucional</S.Option>
          </S.LinkAnchor>

          <S.LinkRouter to={"/presentation"}>
            <S.Option>Demonstrações</S.Option>
          </S.LinkRouter>

          <S.LinkAnchor href={"#whatsappp"}>
            <S.Option>Contato</S.Option>
          </S.LinkAnchor>
        </S.ContainerCards>

        <S.SocialMedia>
          <S.SocialMediaOption>
            <S.SocialMediaImage alt="" src={InstagramIcon} />
            <S.SocialMediaTitle>Instagram</S.SocialMediaTitle>
          </S.SocialMediaOption>

          <S.SocialMediaOption>
            <S.SocialMediaImage alt="" src={LinkedlnIcon} />

            <S.SocialMediaTitle>Linkedin</S.SocialMediaTitle>
          </S.SocialMediaOption>
        </S.SocialMedia>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

import { useContext } from "react";
import { LanguageContext } from "/src/contexts/LanguageProvider";

import * as S from "./styles";

import InstagramIcon from "/src/assets/images/instagram-icon.svg";
import LinkedlnIcon from "/src/assets/images/linkedln-icon.svg";

export function MainHomepage() {
  const LanguageContextValue: any = useContext(LanguageContext);
  const { screen_home } = LanguageContextValue.selectedLanguage;

  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.Title>{screen_home.title}</S.Title>

        <S.Subtitle>{screen_home.subtitle}</S.Subtitle>

        <S.ContainerCards>
          {screen_home.linkOptions.map((option: any) => {
            if (option.isRoute) {
              return (
                <S.LinkRouter to={option.link}>
                  <S.Option>{option.title}</S.Option>
                </S.LinkRouter>
              );
            } else if (option.isDownload) {
              return (
                <S.LinkAnchor href={option.link} download={true}>
                  <S.Option>{option.title}</S.Option>
                </S.LinkAnchor>
              );
            } else if (option.isTel) {
              return (
                <S.LinkAnchor href={option.link}>
                  <S.Option>{option.title}</S.Option>
                </S.LinkAnchor>
              );
            } else
              return (
                <S.LinkAnchor href={option.link} target="_self">
                  <S.Option>{option.title}</S.Option>
                </S.LinkAnchor>
              );
          })}
        </S.ContainerCards>

        <S.SocialMedia>
          <S.LinkAnchor
            href="https://l.workplace.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsofya.health%2F&h=AT3uOXqVjmJ-e2z3xu6_pawlENxK-vHmVnzpVAU4U08BVQisUmNYfDawREagXpv9QQ0NmTHGbo5_OdQxD2EBnzbUfz0y_jHwlgonMFF_CcvBA5wHJST2Fd_wb6znHlY5y78ld1N2ZedWIZ06mTUeeUw-rkc4vM4_xw"
            target="_self"
          >
            <S.SocialMediaOption>
              <S.SocialMediaImage alt="" src={InstagramIcon} />
              <S.SocialMediaTitle>Instagram</S.SocialMediaTitle>
            </S.SocialMediaOption>
          </S.LinkAnchor>

          <S.LinkAnchor
            href="https://l.workplace.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsofya-health%2F&h=AT3uOXqVjmJ-e2z3xu6_pawlENxK-vHmVnzpVAU4U08BVQisUmNYfDawREagXpv9QQ0NmTHGbo5_OdQxD2EBnzbUfz0y_jHwlgonMFF_CcvBA5wHJST2Fd_wb6znHlY5y78ld1N2ZedWIZ06mTUeeUw-rkc4vM4_xw"
            target="_self"
          >
            <S.SocialMediaOption>
              <S.SocialMediaImage alt="" src={LinkedlnIcon} />
              <S.SocialMediaTitle>Linkedin</S.SocialMediaTitle>
            </S.SocialMediaOption>
          </S.LinkAnchor>
        </S.SocialMedia>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

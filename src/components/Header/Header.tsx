import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

import SofyaLogo from "/src/assets/images/sofya-logo.svg";
import BrazilIcon from "/src/assets/images/brazil-icon.svg";
import USAIcon from "/src/assets/images/usa-icon.svg";

enum LanguagesType {
  portuguese = "portuguese",
  english = "english",
}

export function Header() {
  const [selectedLanguage, setSeletedLanguage] = useState<LanguagesType>(
    LanguagesType.portuguese
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSelectLanguage(language: LanguagesType) {
    setSeletedLanguage(language);
  }

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link to={"/"}>
            <S.LogoImage alt="" src={SofyaLogo} />
          </Link>
          <S.ContainerSettingsLanguage>
            <S.ContainerSelectedLanguage onClick={handleToggleModal}>
              {selectedLanguage == LanguagesType.portuguese ? (
                <S.LanguageImage alt="" src={BrazilIcon} />
              ) : (
                <S.LanguageImage alt="" src={USAIcon} />
              )}
            </S.ContainerSelectedLanguage>
            <LanguageModal
              handleSelectLanguage={handleSelectLanguage}
              isModalOpen={isModalOpen}
            />
            <S.Overlay
              onClick={handleCloseModal}
              isModalOpen={isModalOpen}
            ></S.Overlay>
          </S.ContainerSettingsLanguage>
        </S.Wrapper>
      </S.Container>
    </>
  );
}

// Modal Language Change Component
interface LanguageModalProps {
  handleSelectLanguage: (language: LanguagesType) => void;
  isModalOpen: boolean;
}

function LanguageModal({
  handleSelectLanguage,
  isModalOpen,
}: LanguageModalProps) {
  const [modalHeight, setModalHeight] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current && modalHeight <= 0) {
      const heightInPixels = modalRef.current.offsetHeight;
      setModalHeight(heightInPixels);
    }
  });

  return (
    <S.ContainerModal
      ref={modalRef}
      modalHeight={modalHeight}
      isModalOpen={isModalOpen}
    >
      <S.ModalOption
        onClick={() => {
          handleSelectLanguage(LanguagesType.portuguese);
        }}
      >
        <S.LanguageImage alt="" src={BrazilIcon} />
        <S.OptionName>Portuguese </S.OptionName>
      </S.ModalOption>

      <S.ModalOption
        onClick={() => {
          handleSelectLanguage(LanguagesType.english);
        }}
      >
        <S.LanguageImage alt="" src={USAIcon} />
        <S.OptionName>English </S.OptionName>
      </S.ModalOption>
    </S.ContainerModal>
  );
}

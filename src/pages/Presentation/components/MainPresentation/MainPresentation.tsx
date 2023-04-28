import { VideoComponent } from "../videoComponent";
import * as S from "./styles";

export function MainPresentation() {
  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.ContainerCards>
          <VideoComponent
            title="Descrição Cirúrgica"
            linkVideo="https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4"
            description="Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações."
          />

          <VideoComponent
            title="Descrição Cirúrgica"
            linkVideo="https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4"
            description="Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações."
          />

          <VideoComponent
            title="Descrição Cirúrgica"
            linkVideo="https://edisciplinas.usp.br/pluginfile.php/5196097/mod_resource/content/1/Teste.mp4"
            description="Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações."
          />
        </S.ContainerCards>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

// VideoComponent Precisa: Titulo do Video, Link do Video, Descrição do Video

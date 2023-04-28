import PortuguesPDF from "/src/assets/pdfs/Sofya-Portugues.pdf";
import EnglishPDF from "/src/assets/pdfs/Sofya-English.pdf";

import DemonstracaoVideo from "/src/assets/videos/centro cirurgico.mp4";
import AplicativoVideo from "/src/assets/videos/App Sofya.mp4";
import TelemedicinaVideo from "/src/assets/videos/Demo Sofya.mp4";

export const Languages = {
  portuguese: {
    name: "portuguese",
    screen_home: {
      title: "Conheça nosso produto",
      subtitle: "Selecione o conteúdo que deseja acessar",
      linkOptions: [
        { title: "Website", link: "https://www.sofya.ai/" },
        {
          title: "Apresentação Institucional",
          link: PortuguesPDF,
          isDownload: true,
        },
        { title: "Demonstrações", link: "/presentation", isRoute: true },
        { title: "Contato", link: "tel:+552198098747", isTel: true },
      ],
    },

    screen_apresentation: {
      cards: [
        {
          title: "Descrição Cirúrgica",
          video: DemonstracaoVideo,
          description:
            "Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações.",
        },
        {
          title: "Aplicativo",
          video: AplicativoVideo,
          description:
            "Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações.",
        },
        {
          title: "Descrição Cirúrgica",
          video: TelemedicinaVideo,
          description:
            "Faça a descrição de procedimentos cirúrgicos muito mais rápido através da voz. Produza relatos mais completos e eficientes, reduzindo erros em processos de cobrança e auditoria de informações.",
        },
      ],
    },
  },

  english: {
    name: "english",
    screen_home: {
      title: "Meet our product",
      subtitle: "Select the content you want to access",
      linkOptions: [
        { title: "Website", link: "https://www.sofya.ai/" },
        {
          title: "Institutional Presentation",
          link: EnglishPDF,
          isDownload: true,
        },
        { title: "Demo", link: "/presentation", isRoute: true },
        { title: "Contact", link: "tel:+5571999999999", isTel: true },
      ],
    },

    screen_apresentation: {
      cards: [
        {
          title: "Surgical Description",
          video: DemonstracaoVideo,
          description:
            "Describe surgical procedures much faster using voice technology. Create more accurate and efficient reports, reduce mistakes in billing and auditing processes.",
        },
        {
          title: "Care Teams",
          video: AplicativoVideo,
          description:
            "Count with a care central in the palm of your hands. Register patient data through voice, find relevant information quickly and receive health alerts in real time.",
        },
        {
          title: "Telehealth",
          video: TelemedicinaVideo,
          description:
            "Transcribe online medical appointments in real time and automatically identify relevant clinical terms mentioned during the conversation.",
        },
      ],
    },
  },
};

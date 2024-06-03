import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Derick!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Derick"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Profissional flexível de perfil analítico com experiência como Designer freelancer (criação) e Technical Advisor para duas das maiores empresas de tecnologia do mercado (uma no ramo de dispositivos móveis, computadores, sistemas operacionais e nuvem; outra no ramo de consoles e games). 
            </p>
            <p className={styles.paragrafo}>
                Atuação profissional como Technical Advisor/Help Desk fornecendo orientação e conhecimento técnico especializado aos clientes e tendo como objetivo a implementação de soluções eficazes para os cenários de contato, aliando expertise técnica e comunicação personalizada/humanizada a fim de garantir o enriquecimento da experiência dos usuários finais e sua total satisfação com os serviços oferecidos pela marca. 
            </p>
            <p className={styles.paragrafo}>
                Experiência e conhecimento na área de Quality Assurance (QA), empregando metodologias e técnicas da ferramenta Six Sigma, utilizada para identificar, implementar e garantir a melhoria de processos internos na área atuação da empresa.
            </p>
            <p className={styles.paragrafo}>
                Formação em Análise e Desenvolvimento de Sistemas, focando em oportunidades nas áreas de Desenvolvimento e Segurança da Informação.
            </p>
        </PostModelo>
    )
}
import styles from './PostModelo.module.css'
import fotoCapa from "assets/sobre_mim_capa.png"

export default function PostModelo({ fotoCapa, children, titulo }) {
    return(
        <article className={styles.postModeloContainer}>
            <div 
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})`}}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>  
                {children}
            </div>
        </article>  
    )
}
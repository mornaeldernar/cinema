import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from './favorito_fill.png'
import iconNoFavorito from './favorito_outline.png'
import { Link } from "react-router-dom";

function Card({ id, capa, titulo }) {

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some(fav => fav.id === id)
    const icon = isFavorito ? iconFavorito : iconNoFavorito

    return (
        <div className={styles.container}>
            <Link className="styles.link" to={`/videos/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icon}
                alt="Icono favorito"
                className={styles.favorito}
                onClick={() => agregarFavorito({ id, titulo, capa })}
            />
        </div>
    );
}
export default Card;
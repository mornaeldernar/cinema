import Banner from 'componentes/Banner';
import styles from './player.module.css'
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import videos from "data/db.json";
import NotFound from 'pages/NotFound';

const Player = () => {
    const parametros = useParams();
    const video = videos.find(video => video.id === Number(parametros.id));
    
    if(!video){
        return (<NotFound/>)
    }
    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>

                </iframe>
            </section>
        </>
    );
}

export default Player
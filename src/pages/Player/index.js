import Banner from 'componentes/Banner';
import styles from './player.module.css'
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

const Player = () => {

    const [video, setVideo] = useState({});

    const parametros = useParams();
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/mornaeldernar/cinema/videos?id=${parametros.id}`)
        .then(response=>response.json())
        .then(data=>{
            setVideo(...data)
        })
    
    },[])

    
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
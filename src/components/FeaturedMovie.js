import React from 'react';
import '../styles/FeaturedMovie.css'

export default ({item}) =>{

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for( let i in item.genres){
        genres.push(item.genres[i].name);
    }
    let descricao = item.overview;
    if (descricao.length > 200) {
        descricao = descricao.substring(0, 600)+'...';
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.original_name} </div>
                    <div className='featured--info'>
                        <div className="featured--pontos">{item.vote_average} Pontos</div>
                        <div className="featured--ano">{firstDate.getFullYear()}</div>
                        <div className="featured--temporadas">
                            {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''} 
                        </div>
                    </div>
                    <div className="featured--descricao">{descricao}</div>

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--assistir">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`}className="featured--listbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--generos"><strong>Gêneros: </strong>{genres.join(',  ')}</div>
                </div>
            </div>
        </section>
    )
}
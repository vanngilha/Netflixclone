import  {React, useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import Tmdb from './Tmdb';
import './styles/App.css'





export default ( ) => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData]  = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
      const loadAll = async () =>{
        //Pegando toda a Lista
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //Pegando o Featured
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 ));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);

        
      }
      loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
     
    <div className="page">
       <Header black={blackHeader} />
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      {movieList.length <= 0 &&
        <div className="loading">
            <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
      <footer>  
        Desenvolvido por Christopher <br/>
        @Linkedin @Instagram <p/>
        <div className="info">
          Direitos de Imagens para   
          <a href="https://www.netflix.com/br/" target="_blank"> Netflix </a>
          <br/>
          Dados pego do site
          <a href="https://www.themoviedb.org/" target="_blank"> TheMoviedb </a>
        </div>
      </footer>

      
    </div>
  );
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie);
  //console.log("home", popularMovies)
    
useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (   
    <div>
        <Banner movie={popularMovies.results[10]} />
        <div className='contents'>
            <h2>믿고 보는 웨이브 에디터 추천작</h2>
            <MovieSlide movie={popularMovies} />
            <h2>실시간 인기 콘텐츠</h2>
            <MovieSlide movie={topRatedMovies}  />
            <h2>따끈따끈 업데이트 예능</h2>      
            <MovieSlide movie={upcomingMovies}/>
        </div>
    </div>
  )
}

export default Home

import React from 'react'
import Hero from '../components/hero'
import MovieRow from '../components/movieRow'
import endPoints from '../services/movieServieces'
const Home = () => {
    return (
        <div>
            <Hero/>
            <MovieRow title='Upcoming' url={endPoints.upcoming}/>
            <MovieRow title='Trending' url={endPoints.trending}/>
            <MovieRow title='TopRated' url={endPoints.topRated}/>
            <MovieRow title='Comedy' url={endPoints.comedy}/>
            <MovieRow title='Popular' url={endPoints.popular}/>
            
        </div>
    )
}
export default Home

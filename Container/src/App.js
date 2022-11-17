import React, {lazy, Suspense} from 'react';
import styles from './App.module.css';
import Row from './Row';
import Nav from './Nav';
import Widget from './Widget'
import requests from "./requests";

const BannerLazy = lazy(() => import('./components/BannerApp'));

const titles = {
    fetchNetflixOriginals: 'NETFLIX ORIGINALS',
    fetchTrending: 'Trending Now',
    fetchTopRated: 'Top Rated',
    fetchActionMovies: 'Action Movies',
    fetchComedyMovies: 'Comedy Movies',
    fetchHorrorMovies: 'Horror Movies',
    fetchRomanceMovies: 'Romance Movies',
    fetchDocumentaries: 'Documentaries'
}

function App() {

  return (

    <div className={styles['app']}>
        <Widget/>
        <Nav/>
        <Suspense fallback={<div >Loading...</div>}>
        <BannerLazy/>
        </Suspense>
        { Object.keys(titles).map((title,index )=> (<Row key={ title } title={titles[title]} fetchUrl={requests[title]} isLargeRow={index == 0}/>))}
    </div>

  );
}

export default App;

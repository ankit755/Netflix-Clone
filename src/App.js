import React from 'react';
import './App.css';
import ROW from './Row';
import requests from './requests';
import Banner from'./Banner';


function App() {
  return (
    <div className="App">
       {/* Nav Bar */}

      <Banner />
      <ROW 
      title="NETFLIX ORIGINALS" 
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow
       />
      <ROW title="Trending Now" fetchURL={requests.fetchTrending}/>
      <ROW title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <ROW title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <ROW title="Documentries" fetchURL={requests.fetchDocumantaries}/>
      <ROW title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <ROW title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      </div>
  );
}

export default App;

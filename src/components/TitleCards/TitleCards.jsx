import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/cards_data';

const TitleCards = ({title, category}) => {


const [apiData, setApiData] = useState([])

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTAxMDJkMWIzYmNmMmJkNjY5OTU1MDJlYjVmMzA5YyIsIm5iZiI6MTc1Nzk0MzQ2My40NzcsInN1YiI6IjY4YzgxNmE3YjRjNDI0MDUxODcwZGE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAMyQKzza-h6YEz5hg6O2bDiTtkMvOE6MOFOjCPtgxk'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

})

  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` +
card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [trailer, setTrailer] = useState(null)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_TMDB_API_KEY'
    }
  }

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const ytTrailer = data.results.find(
          vid => vid.site === 'YouTube' && vid.type === 'Trailer'
        )
        setTrailer(ytTrailer || null) // set null if no proper trailer
      } else {
        setTrailer(null)
      }
    })
    .catch(err => console.error(err))
}, [id])

  return (
    <div className="player">
      {/* Back button */}
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-btn"
        onClick={() => navigate(-1)}
      />

      {/* YouTube iframe */}
      {trailer ? (
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        allowFullScreen
        frameBorder="0"
        title={trailer.name}
      ></iframe>
        ) : (
          <p style={{ color: 'white' }}>Trailer not available for this movie</p>
        )}


      {/* Info */}
      {trailer && (
        <div className="player-info">
          <p>{trailer.published_at ? trailer.published_at.slice(0, 10) : 'N/A'}</p>
          <p>{trailer.name}</p>
          <p>{trailer.type}</p>
        </div>
      )}
    </div>
  )
}

export default Player

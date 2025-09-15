import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        {/* Banner image */}
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />
        
        <div className="hero-caption">
          {/* Caption image */}
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            dolores harum tempore iure itaque, accusantium debitis corrupti
            repudiandae perspiciatis repellendus optio ratione illo doloremque
            magnam laborum incidunt iste quidem quam.
          </p>
          
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play Icon" /> play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" /> info
            </button>
          </div>
          <TitleCards/>
         
        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={"blockbuster movies"} category={"top_rated"}/>
        <TitleCards title={"only on netflix"}category={"popular"}/>
        
        <TitleCards title={"upcoming"} category={"upcoming"}/>
        <TitleCards title={"top pics for you"}category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
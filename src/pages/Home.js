import React, { useState } from "react";
import ArtistSection from "../components/AtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import ProductSection from "../components/ProductSection/ProductSection";
import art1 from "../Assets/art1.jpg";
import art2 from "../Assets/art2.jpg";
import art3 from "../Assets/art3.jpg";
import artist1 from "../Assets/artist1.png";
import artist2 from "../Assets/artist2.png";
import artist3 from "../Assets/artist3.png";
import FeaturedArtistSection from "../components/FeaturedArtistSection/FeaturedArtistSection";
import MasonrySection from "../components/MasonrySection/MasonrySection";
import Fade from "react-reveal/Fade";
import TrendingAuction from "../components/TrendingAuction/TrendingAuction";
const Home = () => {
  const [trendingAuctions, setTrendingAuctions] = useState([]);

  const [featuredArtist, setFeaturedArtist] = useState([
    {
      id: 1,
      name: "Peter Chung",
      position: "Abstract Artist",
      likes: 99,
      image: artist1,
    },
    {
      id: 2,
      name: "Furba Gurung",
      position: "Abstract Artist",
      likes: 92,
      image: artist2,
    },
    {
      id: 3,
      name: "Sunima Shrestha",
      position: "Abstract Artist",
      likes: 99,
      image: artist3,
    },
  ]);

  return (
    <>
      <Fade>
        <Banner />
      </Fade>
      {/* <TrendingAuction /> */}
      <Fade cascade>
        <ArtistSection
          artistName={"Picasso Pablo"}
          products={trendingAuctions}
        />
      </Fade>
      <Fade cascade>
        <FeaturedArtistSection
          title={"Featured Artists"}
          artists={featuredArtist}
        />
      </Fade>
      <Fade cascade>
        <MasonrySection title={"Loved Arts"} />
      </Fade>
    </>
  );
};

export default Home;

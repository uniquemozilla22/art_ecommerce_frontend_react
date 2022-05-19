import React, { useState } from "react";
import ArtistSection from "../components/AtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import artist1 from "../Assets/artist1.png";
import artist2 from "../Assets/artist2.png";
import artist3 from "../Assets/artist3.png";
import FeaturedArtistSection from "../components/FeaturedArtistSection/FeaturedArtistSection";
import MasonrySection from "../components/MasonrySection/MasonrySection";
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
        <Banner />
        <TrendingAuction />
        <ArtistSection
          artistName={"Picasso Pablo"}
          products={trendingAuctions}
        />
        <FeaturedArtistSection
          title={"Featured Artists"}
          artists={featuredArtist}
        />
        <MasonrySection title={"Loved Arts"} />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { Route, Routes } from "react-router";
import ArtistSection from "../components/AtistSection/ArtistSection";
import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout";
import ProductSection from "../components/TrendingSection/ProductSection";
import art1 from "../Assets/art1.jpg";
import art2 from "../Assets/art2.jpg";
import art3 from "../Assets/art3.jpg";
import FeaturedArtistSection from "../components/FeaturedArtistSection/FeaturedArtistSection";
import MasonrySection from "../components/MasonrySection/MasonrySection";
const Home = () => {
  const data = [
    {
      id: 1,
      name: "One",
      description: "this is the description for One",
      image: art1,
      price: 3000,
      time: "Jan 27, 2022 15:37:25",
    },
    {
      id: 2,
      name: "Two",
      description: "this is the description for Two",
      image: art2,
      price: 6000,
      time: "Jan 26, 2022 15:37:25",
    },
    {
      id: 3,
      name: "Three",
      description: "this is the description for Two",
      image: art3,
      price: 6000,
      time: "Jan 26, 2022 15:37:25",
    },
    {
      id: 4,
      name: "Four",
      description: "this is the description for Two",
      image: art1,
      price: 6000,
      time: "Jan 26, 2022 15:37:25",
    },
  ];
  const [trendingAuctions, setTrendingAuctions] = useState(data);

  const [featuredArtist, setFeaturedArtist] = useState([
    {
      id: 1,
      name: "Peter Chung",
      position: "Abstract Artist",
      likes: 99,
    },
    {
      id: 2,
      name: "Furba Gurung",
      position: "Abstract Artist",
      likes: 92,
    },
    {
      id: 3,
      name: "Sunima Shrestha",
      position: "Abstract Artist",
      likes: 99,
    },
  ]);

  return (
    <>
      <Banner />
      <ProductSection title={"Trending Auction"} products={trendingAuctions} />
      <ArtistSection artistName={"Picasso Pablo"} products={trendingAuctions} />
      <FeaturedArtistSection
        title={"Featured Artists"}
        artists={featuredArtist}
      />
      <MasonrySection title={"Loved Arts"} />
    </>
  );
};

export default Home;

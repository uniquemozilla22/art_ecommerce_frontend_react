import React from "react";
import ArtistBanner from "../../components/ArtistBanner/ArtistBanner";
import background from "../../Assets/background.png";
import art1 from "../../Assets/art1.jpg";
import art2 from "../../Assets/art2.jpg";
import art3 from "../../Assets/art3.jpg";
import artist1 from "../../Assets/artist1.png";
import artist2 from "../../Assets/artist2.png";
import artist3 from "../../Assets/artist3.png";
import ArtistDetails from "../../components/ArtistDetails/ArtistDetails";
import { Fade } from "react-reveal";
import {
  BiddingCard,
  ProductCard,
} from "../../components/ProductCard/ProductCard";
import { ClassNames } from "@emotion/react";
import ProductGrid from "../../components/AritistProductGrid/ProductGrid";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Artist = () => {
  const products = [
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
    },
  ];
  const artists = [
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
  ];
  return (
    <div>
      <ArtistBanner
        background={background}
        name="Phurba Gurung"
        title="Abstract Artist"
        rank={1}
        artsSold={99}
        likes={900}
        artistImage={artist2}
      />
      <div className="container-fluid">
        <ArtistDetails
          name="Phurba Gurung"
          facebook="phurba.gurung"
          twitter="phurba.gurung"
          instagram="phurba.gurung"
        />
        <div className="row">
          <div className={"col-lg-9  col-md-12 col-sm-12 col-xs-12"}>
            <div className={"row"}>
              <ProductGrid products={products} />
            </div>
          </div>
          <div className="col-3 d-none d-lg-block ">
            {artists.map((artist, index) => (
              <ArtistCard
                id={artist.id}
                name={artist.name}
                image={artist.image}
                position={artist.position}
                like={artist.likes}
                delay={index}
                sm
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

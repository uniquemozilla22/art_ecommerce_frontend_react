import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  const [data, setData] = useState({
    name: "Art Gallery",
    contactNumber: "+977 9812345123",
    address: "Radhe Radhe, Bhaktapur",
    email: ["guide@artgallery.com", "support@artgallery.com"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsHzWM0xWbFVMrZ95leaNeIIcJ4_XZbIhYg&usqp=CAU",
    categories: [
      {
        id: 1,
        name: "Category 1",
      },
      {
        id: 2,
        name: "Category 2",
      },
      {
        id: 3,
        name: "Category 3",
      },
      {
        id: 4,
        name: "Category 4",
        subCategory: [
          {
            id: 1,
            name: "Sub Category 1",
          },
          {
            id: 2,
            name: "Sub Category 2",
            subCategory: [
              {
                id: 1,
                name: "Menu 1",
              },
              {
                id: 2,
                name: "Menu 2",
              },
              {
                id: 3,
                name: "Menu 3",
              },
              {
                id: 4,
                name: "Menu 4",
              },
            ],
          },
          {
            id: 3,
            name: "Sub Category 3",
          },
          {
            id: 4,
            name: "Sub Category 4",
          },
        ],
      },
      {
        id: 5,
        name: "Category 5",
        subCategory: [
          {
            id: 1,
            name: "Sub Category 1",
          },
          {
            id: 2,
            name: "Sub Category 2",
          },
          {
            id: 3,
            name: "Sub Category 3",
          },
          {
            id: 4,
            name: "Sub Category 4",
          },
        ],
      },
    ],
  });
  return (
    <>
      <Header data={data} />
      {props.children}
      <Footer data={data} />
    </>
  );
};

export default Layout;

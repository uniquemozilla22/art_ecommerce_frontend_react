import React, { useState } from "react";
import TopTag from "./Toptag/TopTag";
import Navbar from "./Navbar/Navbar";
import Categories from "./Categories/Categories";

const Header = () => {
  const [data, setData] = useState({
    name: "Art Gallery",
    contactNumber: "+977 9812345123",
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
      <TopTag contact={data.contactNumber} />
      <Navbar logo={data.logo} name={data.name} />
      <Categories data={data.categories} />
    </>
  );
};

export default Header;

import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import userImage from "../../Assets/artist2.png";
import art2 from "../../Assets/art2.jpg";
import art1 from "../../Assets/art1.jpg";
import artist2 from "../../Assets/artist2.png";
import artist1 from "../../Assets/artist1.png";
import art3 from "../../Assets/art3.jpg";
import classes from "./EditProfile.module.css";
import { useSelector } from "react-redux";
import {
  ProfileNavigationLink,
  ProfileNavigationContent,
} from "../../components/ProfileNavigationLink/ProfileNavigationLink";

const EditProfile = () => {
  const token = useSelector((state) => state.user.token);
  const user = {
    name: "Yogesh Bhattarai",
    image: userImage,
    verified: true,
  };

  const links = [
    {
      title: "Manage Account",
      links: [
        {
          title: "My Profile",
          data: {
            "Full Name": "Yogesh Bhattarai",
            "Email Address": "bhattaraiyogesh007@gmail.com",
            "Mobile Phone": "+977 9846779494",
            "Date of Birth": "1999 - 06 - 01",
            Gender: "Male",
          },
        },
        {
          title: "Address",
          data: {
            "Address 1": "Pokhara-17, Birauta",
            "Address 2": "Kathmandu , Budhhanagar",
          },
        },
      ],
    },
    {
      title: "My Orders",
      links: [
        {
          title: "My Returns",
          data: [
            {
              id: 1,
              name: "One",
              image: art1,
              status: "Shipped",
              payment: "Cash on Delivery",
            },
            {
              id: 2,
              name: "Two",
              image: art3,
              status: "Ordered",
              payment: "Esewa",
            },
          ],
        },
        {
          title: "Cancellations",
          data: [
            {
              id: 1,
              name: "One",
              image: art1,
              cancelledDate: "2019-06-01",
            },
            {
              id: 2,
              name: "Two",
              image: art3,
              cancelledDate: "2019-06-01",
            },
          ],
        },
      ],
    },
    {
      title: "My Likes",
      links: [
        {
          title: "My Arts",
          data: [
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
          ],
        },
        {
          title: "My Artists",
          data: [
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
          ],
        },
      ],
    },
  ];

  const fetchData = () => {};

  return (
    <div className={"container " + classes.edit__profile__container}>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={links[0].links[0].title
          .toLowerCase()
          .split(" ")
          .join("")}
      >
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <ProfileAvatar
              name={user.name}
              image={user.image}
              verified={user.verified}
            />
            <div className={classes.links__container}>
              {links.map((link) => (
                <ProfileNavigationLink title={link.title} links={link.links} />
              ))}
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <Tab.Content>
              {links.map((link) => (
                <ProfileNavigationContent
                  title={link.title}
                  links={link.links}
                />
              ))}
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default EditProfile;

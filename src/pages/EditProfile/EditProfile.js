import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import userImage from "../../Assets/artist2.png";
import art2 from "../../Assets/art2.jpg";
import art1 from "../../Assets/art1.jpg";
import art3 from "../../Assets/art3.jpg";
import classes from "./EditProfile.module.css";
import {
  ProfileNavigationLink,
  ProfileNavigationContent,
} from "../../components/ProfileNavigationLink/ProfileNavigationLink";

const EditProfile = () => {
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
        {
          title: "Payment Information",
          data: {
            ese: "Pokhara-17, Birauta",
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
          data: {
            "Full Name": "Yogesh Bhattarai",
            "Email Address": "bhattaraiyogesh007@gmail.com",
            "Mobile Phone": "+977 9846779494",
            "Date of Birth": "1999 - 06 - 01",
            Gender: "Male",
          },
        },
        {
          title: "My Artists",
          data: {
            "Address 1": "Pokhara-17, Birauta",
            "Address 2": "Kathmandu , Budhhanagar",
          },
        },
      ],
    },
  ];

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

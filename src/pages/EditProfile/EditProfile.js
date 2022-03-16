import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import userImage from "../../Assets/artist2.png";
import art2 from "../../Assets/art2.jpg";
import art1 from "../../Assets/art1.jpg";
import artist2 from "../../Assets/artist2.png";
import artist1 from "../../Assets/artist1.png";
import art3 from "../../Assets/art3.jpg";
import classes from "./EditProfile.module.css";
import { connect } from "react-redux";
import {
  ProfileNavigationLink,
  ProfileNavigationContent,
} from "../../components/ProfileNavigationLink/ProfileNavigationLink";
import FetchEditProfiileData from "../../store/actions/EditProfile/EditProfile.fetch";
import { hideLoading, showLoading } from "../../store/actions/Loading/Loading";
import UpdateProfile from "../../store/actions/EditProfile/EditProfile.update";
import ChangePasswordAction from "../../store/actions/ChangePassword/ChangePassword.action";
import SendOTPtoEmail from "../../store/actions/Authentication/VerifyEmail/SendOTP.action";

const EditProfile = (props) => {
  const [data, setData] = useState(props.user);
  const user = {
    image: userImage,
    verified: data.otherData.active_status,
  };

  const profile = {
    first_name: data.otherData.first_name,
    last_name: data.otherData.last_name,
    middle_name: data.otherData.middle_name,
    mobile_no: data.otherData.mobile_no,
    alternative_no: data.otherData.alternative_no,
    telephone_no: data.otherData.telephone_no,
    gender: data.otherData.gender,
  };

  const address = {
    primary_address: data.otherData.primary_address,
    secondary_address: data.otherData.secondary_address,
  };

  const social = {
    facebookId: data.otherData.facebookId,
    googleId: data.otherData.googleId,
    twitterId: data.otherData.twitterId,
  };
  const links = [
    {
      title: "Manage Account",
      links: [
        {
          title: "My Profile",
          data: profile,
        },
        {
          title: "Address",
          data: address,
        },
        {
          title: "Social",
          data: social,
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
      title: "Bids",
      links: [
        {
          title: "My Bids",
        },
      ],
    },
    {
      title: "My Likes",
      links: [
        {
          title: "My Arts",
          data: [],
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

  useEffect(() => {
    setData(props.user);
  }, [props.user]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    props.fetchData();
  };

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
              name={"@" + data.username}
              image={user.image}
              verified={user.verified}
              balance={user.balance}
            />
            <div className={classes.links__container}>
              {links.map((link, index) => (
                <ProfileNavigationLink
                  key={index}
                  title={link.title}
                  links={link.links}
                />
              ))}
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <Tab.Content>
              {links.map((link, index) => (
                <ProfileNavigationContent
                  key={index}
                  title={link.title}
                  links={link.links}
                  updateData={props.updateData}
                  postPassword={props.postPassword}
                  activeStatus={data.otherData.active_status}
                  email={data.email}
                  sendOTP={props.sendOTP}
                />
              ))}
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Loader: (data) =>
      data ? dispatch(showLoading()) : dispatch(hideLoading()),
    fetchData: () => dispatch(FetchEditProfiileData()),
    updateData: (data) => dispatch(UpdateProfile(data)),
    postPassword: (data) => dispatch(ChangePasswordAction(data)),
    sendOTP: (data) => dispatch(SendOTPtoEmail(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

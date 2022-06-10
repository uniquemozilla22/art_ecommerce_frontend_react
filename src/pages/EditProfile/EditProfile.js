import React, { useCallback, useEffect, useState } from "react";
import { Tab } from "react-bootstrap";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import classes from "./EditProfile.module.css";
import { connect, useSelector } from "react-redux";
import {
  ProfileNavigationLink,
  ProfileNavigationContent,
} from "../../components/ProfileNavigationLink/ProfileNavigationLink";
import { hideLoading, showLoading } from "../../store/actions/Loading/Loading";
import UpdateProfile from "../../store/actions/EditProfile/EditProfile.update";
import ChangePasswordAction from "../../store/actions/ChangePassword/ChangePassword.action";
import SendOTPtoEmail from "../../store/actions/Authentication/VerifyEmail/SendOTP.action";
import DataNotFound from "../../components/DataNotFound/DataNotFound";
import FetchUserInfo from "./../../store/actions/EditProfile/FetchUserInfo.fetch";
import LoadFundModal from "./LoadFundModal/LoadFundModal.comp";

const EditProfile = (props) => {
  const [userData, setUserData] = useState(null);
  const balanceState = useSelector((state) => state.user.balance);
  const balance = useState(balanceState);

  const [loadModal, setLoadModal] = useState(false);
  const handleShowLoadModal = () => setLoadModal(true);
  const handleHideLoadModal = () => setLoadModal(false);

  const fetchUserData = useCallback(async () => {
    const profileData = await props.FetchUserInfo();
    setUserData(profileData);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const layout = [
    {
      title: "Manage Account",
      links: [
        {
          title: "My Profile",
        },
        {
          title: "Address",
        },
      ],
    },
    {
      title: "Orders",
      links: [
        {
          title: "Order History",
        },
        {
          title: "Cancellations",
        },
      ],
    },
    {
      title: "My Likes",
      links: [
        {
          title: "My Arts",
        },
        {
          title: "My Artists",
          data: [
            {
              id: 1,
              name: "Peter Chung",
              position: "Abstract Artist",
              likes: 99,
              image: "artist1",
            },
            {
              id: 2,
              name: "Furba Gurung",
              position: "Abstract Artist",
              likes: 92,
              image: "artist2",
            },
          ],
        },
      ],
    },
  ];

  return userData ? (
    <div className={"container " + classes.edit__profile__container}>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={layout[0].links[0].title
          .toLowerCase()
          .split(" ")
          .join("")}
      >
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <ProfileAvatar
              name={
                userData.googleId || userData.facebookId
                  ? userData.username
                  : "@" + userData.username
              }
              image={userData.image_url}
              verified={userData.active_status}
              balance={balance}
              handleShowLoadModal={handleShowLoadModal}
            />
            <div className={classes.links__container}>
              {layout.map((link, index) => (
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
              {layout.map((link, index) => (
                <ProfileNavigationContent
                  key={index}
                  title={link.title}
                  links={link.links}
                  updateData={props.updateData}
                  postPassword={props.postPassword}
                  activeStatus={userData.active_status}
                  email={userData.email}
                  sendOTP={props.sendOTP}
                  social={userData.googleId || userData.facebookId}
                />
              ))}
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
      <LoadFundModal
        handleHideLoadModal={handleHideLoadModal}
        loadModal={loadModal}
      />
    </div>
  ) : (
    <DataNotFound
      action={() => fetchUserData()}
      content={"There seems to be an error please try again."}
    />
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
    FetchUserInfo: async () => await dispatch(FetchUserInfo()),
    updateData: async (data) => await dispatch(UpdateProfile(data)),
    postPassword: (data) => dispatch(ChangePasswordAction(data)),
    sendOTP: (data) => dispatch(SendOTPtoEmail(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

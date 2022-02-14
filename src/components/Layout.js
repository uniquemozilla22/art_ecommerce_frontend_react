import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { HideMessage } from "../store/actions/Message/Message";
import ErrorHandle from "./ErrorHandle/ErrorHandle";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LoginModal from "./LoginModal/LoginModal";
import Spinner from "./Spinner/Spinner";

const Layout = (props) => {
  const [data] = useState({
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
  const navigat = useNavigate();

  const [token, setToken] = useState(props.token);
  const location = useLocation();

  useEffect(() => {
    setToken(props.token);
    if (location.pathname === "/login" || location.pathname === "/register") {
      if (props.token) {
        navigat("/");
      }
    }
  }, [location.pathname, navigat, props.token]);

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <>
      <Spinner {...props.loading} image={data.logo} />
      {props.children}
      <ErrorHandle {...props} />
    </>
  ) : (
    <>
      <Header data={data} loggedIn={token} />
      {props.children}
      <Footer data={data} />
      <ErrorHandle {...props} />
      <LoginModal />
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.message,
    loading: { ...state.loader },
    token: state.user.token,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideMessage: () => dispatch(HideMessage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

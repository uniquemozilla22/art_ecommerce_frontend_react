import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ForgotPasswordAction from "../store/actions/Authentication/ForgotPassword/ForgotPassword.action";
import { HideMessage } from "../store/actions/Message/Message";
import { FORGOT__MODEL } from "../store/actions/Types/Types";
import ErrorHandle from "./ErrorHandle/ErrorHandle";
import Footer from "./Footer/Footer";
import ForgotPassword from "./forgotPassword/ForgotPassword";
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

  const [forgot, setForgot] = useState(props.forgot);

  useEffect(() => {
    setToken(props.token);
    setForgot(props.forgot);
    if (location.pathname === "/login" || location.pathname === "/register") {
      if (props.token) {
        navigat("/");
      }
    }
  }, [location.pathname, navigat, props.token, props.forgot]);

  return location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotpassword" ? (
    <>
      <Spinner {...props.loading} image={data.logo} />
      {props.children}
      <ErrorHandle {...props} />
      <ForgotPassword
        show={forgot}
        toggleForgetPassword={() => props.toggleForgetPassword()}
        sendMail={(e) => props.sendMail(e)}
      />
    </>
  ) : (
    <>
      <Spinner {...props.loading} image={data.logo} />
      <Header data={data} loggedIn={token} />
      {props.children}
      <Footer data={data} />
      <ErrorHandle {...props} />
      <LoginModal />
      <ForgotPassword
        show={forgot}
        toggleForgetPassword={() => props.toggleForgetPassword()}
        sendMail={(e) => props.sendMail(e)}
      />
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.message,
    loading: { ...state.loader },
    token: state.user.token,
    forgot: state.modal.forgot,
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideMessage: () => dispatch(HideMessage()),
    toggleForgetPassword: () => dispatch({ type: FORGOT__MODEL }),
    sendMail: (email) => dispatch(ForgotPasswordAction(email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

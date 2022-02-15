import axiosBase from "../../../../axiosBase";

const GoogleAuthAction = () => {
  return (dispatch) => {
    authenticateUsingGoogle
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const authenticateUsingGoogle = () => {
  return axiosBase.get("/auth/google");
};

export default GoogleAuthAction;

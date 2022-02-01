import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import userImage from "../../Assets/artist2.png";
import ProfileNavigationLink from "../../components/ProfileNavigationLink/ProfileNavigationLink";

const EditProfile = () => {
  const user = {
    name: "Yogesh Bhattarai",
    image: userImage,
    verified: true,
  };

  return (
    <div className="container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="row">
          <div className="col-3">
            <ProfileAvatar
              name={user.name}
              image={user.image}
              verified={user.verified}
            />

            <ProfileNavigationLink
              title="Manage Account"
              links={["My Profile", "Address", "Payment Information"]}
            />

            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-9">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p>THis is the first event</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>This is the second Event</p>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default EditProfile;

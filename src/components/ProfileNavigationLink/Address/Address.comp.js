import { Tooltip } from "@mui/material";
import React from "react";
import classes from "./Address.module.css";
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";

const AddressComponentEditProfile = ({ data }) => {
  console.log(data);
  const updateData = () => {};
  const deleteData = () => {};

  const handleShowAddressForm = () => {};
  return (
    <>
      {data.map((address, index) => (
        <div className={classes.address__container}>
          <div className={classes.content__container}>
            <h4>{address.name}</h4>
            <p>
              {address.region.name},{address.district.name}
            </p>
            <p>
              {address.state.name}-{address.postal_code} , ,
              {address.country.name}
            </p>
          </div>
          <div className={classes.action__buttons}>
            {updateData && (
              <Tooltip title={"Edit Address"}>
                <EditOutlined
                  className={classes.icon}
                  onClick={(e) => handleShowAddressForm(index, address)}
                />
              </Tooltip>
            )}
            {address.status !== "primary" && deleteData && (
              <Tooltip title={"Delete Address"}>
                <DeleteOutlineRounded
                  className={classes.icon}
                  onClick={(e) => deleteData(address.id)}
                />
              </Tooltip>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressComponentEditProfile;

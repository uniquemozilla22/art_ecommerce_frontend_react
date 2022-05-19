import { Modal, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./Address.module.css";
import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { FormCreatorAddress } from "../../CheckoutInformation/EditAddress/EditAddressModal.comp";
import AddOrderAddress from "../../../store/actions/Address/AddOrderAddress.post";
import { useDispatch } from "react-redux";
import DeleteOrderAddress from "../../../store/actions/Address/DeleteOrderAddress.delete";
import { showConfirmation } from "../../../store/actions/Confirmation/Confirmation.action";
import UpdateOrderAddress from "../../../store/actions/Address/UpdateOrderAddress.post";
import FetchUserAddress from "../../../store/actions/Address/FetchUserAddress.fetch";
import { Spinner } from "react-bootstrap";

const AddressComponentEditProfile = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState({
    data: null,
    index: null,
  });
  const dispatch = useDispatch();

  const fetchData = async () => {
    const address = await dispatch(FetchUserAddress());
    setAddressData(address);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = async (index, id, data) => {
    console.log("updating data", index, id, data);
    const updated = await dispatch(
      UpdateOrderAddress(id, {
        ...data,
        country: data.country.id,
        region: data.region.id,
        district: data.district.id,
        state: data.state.id,
      })
    );
    console.log("Updated Address", updated);
    if (updated) {
      let updatingAddress = addressData;
      updatingAddress[index] = {
        ...updatingAddress[index],
        ...updated,
      };
      console.log("updating address", updatingAddress);
      setAddressData(updatingAddress);
    }
  };

  const handleShowAddressForm = (payload) => {
    setShowAddForm(payload);
  };

  const handleSelectedAddress = (data, index) => {
    setSelectedAddress({ data, index });
  };

  const handleAddData = async (data) => {
    console.log("addData", data);
    const updated = await dispatch(
      AddOrderAddress({
        ...data,
        country: data.country.id,
        region: data.region.id,
        district: data.district.id,
        state: data.state.id,
      })
    );
    if (updated) {
      setAddressData([...addressData, updated]);
    }
  };
  const handleDeleteAddressData = async (index, id) => {
    const deletedData = await dispatch(DeleteOrderAddress(id));
    if (deletedData) {
      let updatingAddress = addressData;
      updatingAddress.splice(index, 1);
      setAddressData([...updatingAddress]);
    }
  };

  const handleConfirmationDelete = (index, id) => {
    dispatch(
      showConfirmation(
        "Your Address Will Be removed. Are you Sure?",
        async () => handleDeleteAddressData(index, id)
      )
    );
  };

  return addressData ? (
      <div className={classes.address__wrapper}>
        {addressData.map((address, index) => (
          <>
            <div className={classes.address__container}>
              <div className={classes.content__container}>
                <h4>{address.name}</h4>
                <p>
                  {address.region.name},{address.district.name}
                </p>
                <p>
                  {address.state.name} -{address.postal_code} ,
                  {address.country.name}
                </p>
              </div>
              <div className={classes.action__buttons}>
                {updateData && (
                  <Tooltip title={"Edit Address"}>
                    <EditOutlined
                      className={classes.icon}
                      onClick={(e) => {
                        handleSelectedAddress(address, index);
                        handleShowAddressForm(true);
                      }}
                    />
                  </Tooltip>
                )}
                {address.status !== "primary" && (
                  <Tooltip title={"Delete Address"}>
                    <DeleteOutlineRounded
                      className={classes.icon}
                      onClick={(e) =>
                        handleConfirmationDelete(index, address.id)
                      }
                    />
                  </Tooltip>
                )}
              </div>
            </div>
          </>
        ))}
        {addressData.length < 5 && (
          <button
            onClick={(e) => {
              handleShowAddressForm(true);
              handleSelectedAddress(null, null);
            }}
          >
            Add Address
          </button>
        )}
        <Modal open={showAddForm} onClose={() => handleShowAddressForm(false)}>
          <div className={classes.modal__body__child}>
            <FormCreatorAddress
              data={selectedAddress.data}
              addData={(d) => {
                handleAddData(d);
                handleShowAddressForm(false);
              }}
              updateData={(id, d) => {
                updateData(selectedAddress.index, id, d);
                handleShowAddressForm(false);
              }}
              classes={classes}
              cancel={() => handleShowAddressForm(false)}
            />
          </div>
        </Modal>
      </div>
  ) : (
    <Spinner /> 
  );
};

export default AddressComponentEditProfile;

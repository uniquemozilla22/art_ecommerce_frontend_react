import { DeleteOutlineRounded, EditOutlined } from "@mui/icons-material";
import { Autocomplete, Modal, Tooltip, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { animated } from "react-spring";
import {
  getCountries,
  getDistrict,
  getState,
} from "../../../store/actions/Address/AddressSelection/getHiearchy.fetch";
import classes from "./EditAddress.module.css";

const EditAddressModal = ({
  show,
  handleHide,
  updateData,
  data,
  addData,
  deleteData,
}) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddData = (data) => addData(data);
  const handleShowAddressForm = (count, data) => {
    setShowAddAddress(true);
    setSelectedAddress({ count, data });
  };
  const handleHideAddressForm = () => setShowAddAddress(false);
  const [addresses, setAddresses] = useState(data);

  useEffect(() => {
    setAddresses(data);
  }, [data]);

  useEffect(() => {
    setAddresses(data);
  }, [data]);
  return (
    <Modal open={show} onClose={handleHide}>
      <div className={classes.modal__body}>
        <h2>Address</h2>
        {addresses.map((address, index) => (
          <EditedClick
            updateData={(id, address) => updateData(index, id, address)}
            key={index}
            count={index}
            address={address}
            deleteData={(id) => deleteData(index, id)}
            handleShowAddressForm={handleShowAddressForm}
          />
        ))}

        {addresses.length <= 5 && (
          <>
            <Button
              className={classes.button_add}
              onClick={(e) => handleShowAddressForm(null)}
            >
              Add Address
            </Button>
            <Modal open={showAddAddress} onClose={handleHideAddressForm}>
              <div className={classes.modal__body__child}>
                <FormCreator
                  data={selectedAddress?.data}
                  addData={(d) => {
                    handleAddData(d);
                  }}
                  updateData={(id, d) => {
                    updateData(selectedAddress?.count, id, d);
                  }}
                  classes={classes}
                  cancel={handleHideAddressForm}
                />
              </div>
            </Modal>
          </>
        )}
      </div>
    </Modal>
  );
};

export const EditedClick = ({
  updateData,
  address,
  deleteData,
  handleShowAddressForm,
  count,
}) => {
  return (
    <div>
      <div className={classes.information__container}>
        <div>
          <h2>
            {address.name.charAt(0).toUpperCase() + address.name.slice(1)}
          </h2>
          <p>
            <p>
              {address.city} {address.postal_code} {address.country}
            </p>
            <p>Contact: {address.mobile_number}</p>
            Landmark : <span>{address.landmark}</span>
          </p>
        </div>

        <div className={classes.icon}>
          {updateData && (
            <Tooltip title={"Edit Address"}>
              <EditOutlined
                className={classes.icon}
                onClick={(e) => handleShowAddressForm(count, address)}
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
    </div>
  );
};

const FormCreator = ({ data, updateData, addData, classes, cancel }) => {
  const [address, setAddress] = useState({
    name: "bhaktapur",
    user_id: 29,
    postal_code: "44600",
    landmark: "near durbar square",
    mobile_number: "9861086078",
    country: {
      id: 1,
      name: "Nepal",
    },
    state: {
      id: 3,
      name: "Provinces No 3",
    },
    district: {
      id: 5,
      name: "Bhaktapur",
    },
    region: {
      id: 13,
      name: "Palanse",
    },
  });

  const [countriesList, setCountriesList] = useState(null);
  const [stateList, setStateList] = useState(null);
  const [districtList, setDistrictList] = useState(null);
  const [regionList, setRegionList] = useState(null);

  const dispatch = useDispatch();

  const getCountryList = async () => {
    const countries = await dispatch(getCountries());
    setCountriesList(countries);
  };

  const getStatesInCountry = async (id) => {
    const statesList = await dispatch(getState(id));
    setStateList(statesList);
  };

  const getDistrictInState = async (id) => {
    const distrctLists = await dispatch(getDistrict(id));
    setDistrictList(distrctLists);
  };

  const getRegionInState = async (id) => {
    const regionLists = await dispatch(getDistrict(id));
    setRegionList(regionLists);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
      updateData(data.id, address);
    } else {
      addData(address);
    }
  };

  useEffect(() => {
    getCountryList();
    if (address?.country?.id) {
      getStatesInCountry(address?.country?.id);
    }
    if (address?.state?.id) {
      getDistrictInState(address?.state?.id);
    }
    if (address?.district?.id) {
      getRegionInDistrict(address?.district?.id);
    }
  }, []);
  return (
    <animated.form
      className={classes.form__modal}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder={address?.name || "Name"}
        name={address?.name}
        value={address?.name}
        onChange={(e) => {
          setAddress({ ...address, name: e.target.value });
        }}
        required
      />
      <select
        value={JSON.stringify({
          id: address.state.id,
          name: address.state.name,
        })}
        onChange={(e) => {
          setAddress({ ...address, country: JSON.parse(e.target.value) });
        }}
      >
        {countriesList && (
          <>
            <option disabled selected>
              ---Select Your Country---
            </option>
            {countriesList.map((country, index) => (
              <option
                value={JSON.stringify({ id: country.id, name: country.name })}
                name={country.name}
                key={index}
              >
                {country.name}
              </option>
            ))}
          </>
        )}
      </select>

      {address && address?.country?.id && (
        <select
          value={JSON.stringify({
            id: address.state.id,
            name: address.state.name,
          })}
          onChange={(e) => {
            console.log(e.target.name);
            setAddress({ ...address, state: JSON.parse(e.target.value) });
          }}
        >
          {stateList && (
            <>
              <option disabled selected>
                ---Select Your State/ Province---
              </option>
              {stateList.map((state, index) => (
                <option
                  value={JSON.stringify({ id: state.id, name: state.name })}
                  name={state.name}
                  key={index}
                >
                  {state.name}
                </option>
              ))}
            </>
          )}
        </select>
      )}
      {address && address?.state?.id && (
        <select
          value={JSON.stringify({
            id: address.district.id,
            name: address.district.name,
          })}
          onChange={(e) => {
            console.log(e.target.name);
            setAddress({ ...address, district: JSON.parse(e.target.value) });
          }}
        >
          {districtList && (
            <>
              <option disabled selected>
                ---Select Your State/ Province---
              </option>
              {districtList.map((district, index) => (
                <option
                  value={JSON.stringify({
                    id: district.id,
                    name: district.name,
                  })}
                  name={district.name}
                  key={index}
                >
                  {district.name}
                </option>
              ))}
            </>
          )}
        </select>
      )}
      <input
        type="text"
        placeholder={address?.state || "State"}
        name={address?.state}
        value={address?.state}
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder={address?.city || "City"}
        name={address?.city}
        value={address?.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder={address?.postal_code || "Postal Code"}
        name={address?.postal_code}
        value={address?.postal_code}
        onChange={(e) =>
          setAddress({ ...address, postal_code: e.target.value })
        }
        required
      />
      <input
        type="number"
        placeholder={address?.mobile_number || "Mobile Number"}
        name={address?.mobile_number}
        value={address?.mobile_number}
        onChange={(e) =>
          setAddress({ ...address, mobile_number: e.target.value })
        }
        required
      />
      <textarea
        type="textarea"
        placeholder={address?.landmark || "Landmark"}
        name={address?.landmark || ""}
        onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
        rows="2"
      />
      <div className={classes.buttons__container}>
        <input type="submit" value="Submit" />
      </div>
      <div className={classes.cancel__container} onClick={(e) => cancel()}>
        Cancel
      </div>
    </animated.form>
  );
};

export default EditAddressModal;

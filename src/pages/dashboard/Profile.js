import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userActions";
const Profile = () => {
  const { log } = console;
  const { user } = useSelector((store) => store);
  const [userData, setUserData] = useState({
    name: user?.user?.name ?? "",
    email: user?.user?.email ?? "",
    lastName: user?.user?.lastName ?? "",
    location: user?.user?.location ?? ""
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow type="text" name="name" value={userData.name} handleChange={handleChange} />
          <FormRow type="text" name="email" value={userData.email} handleChange={handleChange} />
          <FormRow
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location "
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={user?.isLoading}>
            {user?.isLoading ? "Please wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;

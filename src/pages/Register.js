import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userActions";
//ScreenID: ### 10
//ScreenID: ### 12
// initialize state for user
const initialized = {
  name: "",
  email: "",
  password: "",
  isMember: true
};
const Register = () => {
  const [info, setInfo] = useState(initialized);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // onchange input form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };
  // handle submit form
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = info;
    if (!email || !password || (!name && !isMember)) {
      toast.warning("Please Fill Out All Fields");
      return;
    }
    if (info.isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name: name, email: email, password: password }));
  };
  const toggleMember = () => {
    setInfo({ ...info, isMember: !info.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3> {!info.isMember ? "Login" : "Register"}</h3>
        {!info.isMember && (
          <FormRow type="text" name="name" value={info.name} handleChange={handleChange} />
        )}
        {/* email filed */}
        <FormRow type="email" name="email" value={info.email} handleChange={handleChange} />
        {/* password filed */}
        <FormRow
          type="password"
          name="password"
          value={info.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {info.isMember ? "Not a member yet?" : "Already a member?"}{" "}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {info.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

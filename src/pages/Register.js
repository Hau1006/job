import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
//ScreenID: ### 10
const Register = () => {
  // initialize state for user
  const initialized = {
    name: "",
    email: "",
    password: "",
    isMember: true
  };
  const [info, setInfo] = useState(initialized);
  const [values, setValues] = useState(initialized.isMember);
  // onchange input form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...values, [name]: value });
  };
  // handle submit form
  const onSubmit = (e) => {
    e.preventDefault();
    if (!info.email || !info.password || (!info.name && !info.isMember)) {
      toast.warning("Please Fill Out All Fields");
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3> {!info.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow type="text" name="name" value={info.name} handleChange={handleChange} />
        )}
        {/* email filed */}
        <FormRow type="email" name="Email" value={info.email} handleChange={handleChange} />
        {/* password filed */}
        <FormRow
          type="password"
          name="Password"
          value={info.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}{" "}
          <button className="member-btn" type="button" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;

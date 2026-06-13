import { useState } from "react";
import { ValidEmail } from "../utils/ValidEmail";

function CreateAccount() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //errors

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMobileChange(e) {
    setMobile(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleCreateAccount() {
    console.log(name, mobile, email, password);
    let count =0;
    if (name.length <= 3) {
      count++;
      setNameError("provide valid name");
    }
    else { setNameError(""); }

    if (ValidEmail(email)) {
      setEmailError("");
    } else {
      count++;
      setEmailError("provide valid email")
    }
    if (mobile.length >= 10) {
      setMobileError("");
    }
    else {
      count++;
      setMobileError("provide valid mobile number");
    }

    if (password.length <= 8) {
      count++;
      setPasswordError("provide valid password");
    }
    else {
      setPasswordError("");

    }
    if(count===0){
       console.log("no errors");
    }

  }
  return (

    <>

      <div>
        <label>name</label>
        <input type="text" class="form-control" onChange={event => handleNameChange(event)}></input>
        {nameError}
      </div>
      <div>
        <label>email</label>
        <input type="text" class="form-control" onChange={event => handleEmailChange(event)}></input>
        {emailError}
      </div>
      <div>
        <label>password</label>
        <input type="text" class="form-control" onChange={event => handlePasswordChange(event)}></input>
        {passwordError}
      </div>
      <div>
        <label>Mobile</label>
        <input type="text" class="form-control" onChange={event => handleMobileChange(event)}></input>
        {mobileError}
      </div>

      <button className="text-danger" value="Create Account" onClick={event => handleCreateAccount()}>createAccount</button>
    </>
  );
}
export default CreateAccount;
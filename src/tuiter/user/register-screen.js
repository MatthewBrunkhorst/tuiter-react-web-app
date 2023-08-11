import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register } from "../services/auth-thunks";
function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [_id, set_id] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleRegister = async () => {
  try {
    await dispatch(register({ username, password, firstName, lastName, _id }));
    navigate("/tuiter/profile");
  } catch (e) {
    alert(e);
  }
 };
 return (
  <div>
   <h1>Register Screen</h1>
   <div className="mt-2">
    <label>Username</label>
    <input className="form-control" type="text" value={username}
     onChange={(event) => setUsername(event.target.value)}/>
   </div>
   <div className="mt-2">
     <label>Password</label>
     <input className="form-control" type="password" value={password}
       onChange={(event) => setPassword(event.target.value)}/>
   </div>
   <div className="mt-2">
    <label>First Name</label>
    <input className="form-control" type="text" value={firstName}
     onChange={(event) => setFirstName(event.target.value)}/>
   </div>
   <div className="mt-2">
     <label>Last Name</label>
     <input className="form-control" type="text" value={lastName}
       onChange={(event) => setLastName(event.target.value)}/>
   </div>
   <div className="mt-2">
     <label>User ID</label>
     <input className="form-control" type="text" value={_id}
       onChange={(event) => set_id(event.target.value)}/>
   </div>
   <button className="btn btn-primary mt-2"
           onClick={handleRegister}>
     Register
   </button>
  </div>
 );

}
export default RegisterScreen;
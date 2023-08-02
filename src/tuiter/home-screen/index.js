import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function HomeScreen() {
 return(
   <>
     

<h4>Home</h4>
<WhatsHappening/>
     <TuitList/>
   </>
 );
}
export default HomeScreen;
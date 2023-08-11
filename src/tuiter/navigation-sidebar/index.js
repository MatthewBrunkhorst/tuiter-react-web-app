import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const { currentUser } = useSelector((state) => state.user);
 return (
   <div className="list-group">
     <Link to={"/tuiter/home "} className={`list-group-item
                ${active === "home" || active == null ? "active" : ""}`}><i class="fa-solid fa-bell"></i> Home</Link>
     <Link to={"/tuiter/explore "} className={`list-group-item
                ${active === "explore" ? "active" : ""}`}><i class="fa-solid fa-hashtag"></i> Explore</Link>
     <Link to={"/tuiter/notifications "} className={`list-group-item
                ${active === "notifications" ? "active" : ""}`}><i class="fa-solid fa-bell"></i> Notifications
     </Link>
     <Link to={"/tuiter/messages "} className={`list-group-item
                ${active === "messages" ? "active" : ""}`}><i class="fa-solid fa-envelope"></i> Messages</Link>
     <Link to={"/tuiter/bookmarks "} className={`list-group-item
                ${active === "bookmarks" ? "active" : ""}`}><i class="fa-solid fa-bookmark"></i> Bookmarks</Link>
     <Link to={"/tuiter/lists "} className={`list-group-item
                ${active === "lists" ? "active" : ""}`}><i class="fa-solid fa-list"></i> Lists</Link>
     {/* <Link to={"/tuiter/profile "} className={`list-group-item
                ${active === "profile" ? "active" : ""}`}><i class="fa-solid fa-user"></i> Profile</Link> */}
     <Link to={"/tuiter/more "} className={`list-group-item
                ${active === "more" ? "active" : ""}`}><i class="fa-solid fa-ellipsis"></i> More</Link>
                     {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
   </div>
 );
};
export default NavigationSidebar;
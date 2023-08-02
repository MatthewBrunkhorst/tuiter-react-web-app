import {useDispatch} from "react-redux";
import {createTuit, deleteTuit}
 from "../reducers/tuits-reducer";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {SlBubble} from "react-icons/sl";
import {PiArrowsClockwiseBold} from "react-icons/pi";
import {AiFillHeart} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";


//...
const TuitItem = (
  {


tuit = {
  "topic": "Space",
  "userName": "SpaceX",
  "time": "2h",
  "title": `Tesla CyberTruck lands on Mars and
            picks up the Curiosity rover on its 6' bed`,
  "image": "tesla.png", "liked": true,
  "replies": 123,
  "retuits": 432,
  "likes": 2345,
  "handle": "@spacex",
  "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
}

}
) => {
//...






const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
return(
 <li className="list-group-item">
    <div className="row">
      <div className="col-auto">
        <img width={50}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}/>
      </div>
      <div className="col-10">
      <div>
        <AiOutlineClose className="me-3 float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></AiOutlineClose>
            
            {tuit.userName} <BsFillPatchCheckFill className="me-3"/> {tuit.handle} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
       <div><SlBubble className="me-3"/> {tuit.replies}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <PiArrowsClockwiseBold className="me-3"/> {tuit.retuits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <AiFillHeart className="me-3"/> {tuit.likes}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FiShare className="me-3"/></div>
        {/* <div>
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
        </div> */}
      </div>

    </div>
  </li>


 //...






 )
}
export default TuitItem;
import './index.css';


function Classes() {

  const color = 'blue';
  const dangerous = true;

 return (
   <div>
     <h2>Classes</h2>

     <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-yellow'}
                                   wd-fg-black wd-padding-10px`}>
       Dangerous background (For whatever reason, green wasn't working, so I used yellow instead)
     </div>


     <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
       Dynamic Blue background
     </div>

     <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
       Yellow background
     </div>
     <div className="wd-bg-blue wd-fg-black wd-padding-10px">
       Blue background
     </div>
     <div className="wd-bg-red wd-fg-black wd-padding-10px">
       Red background
     </div>




   </div>




 )
};
export default Classes;
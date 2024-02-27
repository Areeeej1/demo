import React from 'react';
import {useLocation} from 'react-router-dom';
const Ben102=()=> {
    const location = useLocation();
    console.log(location);
    return (
    <><br></br>
      <div  className="container" >
        <hr></hr>
       {/* <li>{location.state.abilities}</li> */}
         {
            location.state.abilities.map((data)=>{
            
                return(
                    <li >  {data}</li>
                )
            })
        } 
        <hr></hr>
        </div>
        </>
   
    );
}

export default Ben102;
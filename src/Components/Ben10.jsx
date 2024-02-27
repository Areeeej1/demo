import React,{useState,useEffect} from 'react';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from "react-router-dom";

const Ben10=()=> {
    const navigate=useNavigate();
    const [dataa,setData]=useState([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);
    const getData=()=>{
     axios.get("https://ben10-api.herokuapp.com/aliens")
     .then(res=>{
        console.log(res.data.aliens);
        setData(res.data.aliens);
        setLoading(false);
     })
     .catch((error)=>{
      setLoading(false);
      setError(error.message);
      
     })

    
    }
  
    // console.log(dataa?.general?.name);
    useEffect(()=>{
        getData();
    },[])
    const abilities=(abilities)=>{
        navigate('/ben102',{ replace: false, state:{abilities}}); 
    }
    return (
     
     <div style={{background:"rgb(33, 165, 73)"}}>
            
             { loading ? <CircularProgress style={{color:"rgb(97, 231, 137)",marginLeft: "50%"}}/> : 
             <>
             { error? <p style={{color:"red",fontSize:"100%",paddingLeft: "40%"}}>{error} </p>: 
             <> {dataa.map((d)=>{
             return(
          <> <br></br>
        <div  className="container" key={d?._id} >
        <b>Name:  &ensp; &emsp; &emsp;  </b> {d?.general?.name}
        <br></br>
      <b>HomeWorld:  &nbsp;</b> {d?.general?.homeWorld}
        <br></br>
      <b>Body: &nbsp;&nbsp;&nbsp;&nbsp; &emsp; &emsp;  </b> {d?.general?.body}
      <br></br>
      <button style={{marginBottom:"-2%",marginTop:"10%",marginLeft:"60%",fontSize:"100%"}} onClick={()=>abilities(d?.abilities)}>Abilities</button>
     
       </div>
       </> )
       })}
       </>
       }
       </>
       }
        <br></br>
        
       </div>
       
       )

}

export default Ben10;
import React ,{useState,useEffect}from 'react';
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import axios from "axios";
import Avatar from 'react-avatar';
const GitHub=()=> {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState();
    const [loading,setLoading]=useState(true);
    const getData=()=>{
     axios.get("https://api.github.com/users")
     .then(res=>{
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
     })
     .catch((error)=>{
      setLoading(false);
      setError(error.message);
     })

   
    }
    console.log(error);
    useEffect(()=>{
        getData();
    },[])


    const columns = [{name:"login",
                      lable: "Name"}, 

                      {name:"avatar_url",
                    //   options: {
                    //     customBodyRender: () => {
                    //       return (
                    //         <img variant="rounded" src={users?.avatar_url} >
                    //         </img>
                    //       )
                    //     }
                    //   }
                     } 
                     
                    ];

//   const data=users.login;
  
//     console.log(data);

    const options = {
    selectableRowsHideCheckboxes:true,
    download: false,
    print: false,

    };
    

    return (
        <>
        { loading ?  <Box sx={{ width: '100%' }}><LinearProgress style={{color:"rgb(97, 231, 137)"}}/></Box> : 
        <>
        { error ? <p style={{color:"red",fontSize:"100%",paddingLeft: "40%"}}>{error} </p>: 
        <MUIDataTable
        title={"GitHub Users"}
        data={users}
        columns={columns}
        options={options}>
        </MUIDataTable>
       }
         </>
         }
        </>
    );
}

export default GitHub;
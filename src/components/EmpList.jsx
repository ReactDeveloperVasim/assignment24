import { Grid,Card , CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";


export const EmpList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://api.escuelajs.co/api/v1/users");
        setData(result.data);
    };

    useEffect(()=>{
            getData();
    },[])

    return(
        <Grid container spacing={1} sx={{bgcolor:"orange",paddingTop:"20px"}}>
       {
        data.slice(0,3).map((item)=>
        <Grid item xs={4} >
            <Card sx={{  bgcolor:"rgb(240, 240, 240)" , margin:"10px" , height:"580px", marginBottom:"3   0px"}}>
                <CardContent>
               
                    <img src={item.avatar} alt="" style={{height:"400px", width:"400px" , borderRadius:"50%", marginLeft:"25px"}} />
                    <p style={{fontSize:"35px" , fontWeight:"700", marginTop:"-15px"}}>{item.name.toUpperCase()}</p>
                    <p style={{fontSize:"25px",marginTop:"-25px"}}>{item.role}</p>
                    <p style={{fontSize:"25px",marginTop:"-25px"}}>{item.email}</p>
                    <p style={{fontSize:"25px",marginTop:"-25px"}}>{item.password}</p>
                   
                </CardContent>
            </Card> </Grid>
        )
       }
</Grid>
    );
}
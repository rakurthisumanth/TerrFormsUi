import { Button } from '@mui/material'
import React,{useState} from 'react'
import Data from './Data.json'
import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles'


const Styles=makeStyles({
    root:{
        color:"red",
        // marginLeft:"93vh"
        
    },
    col:{
        color:"red"
    }
})

function JsonFile() {
    const classes=Styles()

    const [data,setdata]=useState({
        isLogined:false
    })
    const HandleClick=()=>{
        setdata({
            isLogined:true
        })
    }
    return (
        <div>
            <br/><br/><br/>
            <Button variant="contained" onClick={HandleClick}  >IMPORT</Button>
        {
            data.isLogined ?
               Data.map(pos=>{
                    return(
                       <>
                      
                           <h1 className={classes.root}>
                              {pos.terraform_version}
                           </h1>
                           <h1 className={classes.root}>
                              {pos.lineage}
                           </h1>
                           <h1 className={classes.root}>
                              {pos.resources.map(rt=>{
                                  return(
                                      <>
                                      <h1>
                                      {rt.name} And {rt.type}
                                      </h1>
                                     {rt.instances.map(r1=>{
                                         return(
                                             <>
                                             <h1>{r1.attributes.arn}</h1>
                                             <h1>{r1.attributes.tags_all.Terraform}</h1>
                                             </>
                                         )
                                     })}
                                      </>
                                  )
                              })}
                           </h1>
       
                       </>
                   )
                }):<h1 className={classes.root}>Welcom To T Project</h1>
        }

        </div>
    )
}

export default JsonFile
import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from "./Context";

export default class ContactState extends Component {
   

render() {
    return(
<Consumer>
{
    (value)=>{
     const {contact}  = value; 
return(
    <div>
     {contact.map((single)=>{
        return ( <Contact key ={single.id} single={single}/>)
       
    
     } 
)
    } 
       </div>
    
      ) 
    }

}

</Consumer>
    )}   
}
import React, { Component } from "react";
import PropTypes from "prop-types"
import {Consumer} from "./Context"




class Contact extends Component {
  state={
    openandclose: true
  }
  openClose = e=>{
    
    this.setState({openandclose: !this.state.openandclose})
  
  }


  deletebtn=(id,dispatch)=> {
  dispatch({type:"DELETE_CONTACT",payload:id })

  };
  render() {
    const { name,email,number,Country,address,religion,id} = this.props.single;
   const {openandclose}= this.state
 
    return (
      <Consumer>

        { value =>{
          const { dispatch } = value;
          return(
            <div style={{display:"flex",flexDirection:"row", justifyContent:"center",alignItems: "center",}}>
            <div style={divStyle}>
            <h4 style={{padding: "13px "}}> My Name is <b>{name} </b><i className="fas fa-sort-down"   onClick={this.openClose}></i>
            <i style={{float: "right "}} onClick={this.deletebtn.bind(this,id, dispatch)} className="fas fa-trash-alt"></i> </h4>
           
            {openandclose ? <ul  className= "list-group" style={{listStyle: "none"}}>
              <li className= "list-group-item"><b>Email:</b> {email} </li>
              <br/>
              <li className= "list-group-item">  <b>Phone Number:</b> {number}</li>
              <br/>
              <li className= "list-group-item"><b>Contact Address:</b> {address}</li>
              <br/>
              <li className= "list-group-item"><b>Nigerian?:</b>  {Country=== "Nigeria" ? "Yes":"No"}</li>
              <br/>
            <li className= "list-group-item"><b>Religion allowed?{religion} :</b>{religion ==="muslim" || religion ==="christian" ?  "Yes" :"No"   } </li>
            </ul>  : `Thank you  `}
            
             <hr/>
           </div>
           </div>
          )
        }
         
  }
      </Consumer>
   
    
    )}
}



// proptypes

Contact.propTypes={
  single: PropTypes.object.isRequired,
 
}
// styling
const divStyle ={
color: "red",
border: "5px solid blue",
height: "100%",
backgroundColor: "black",
borderRadius:"5px",
marginBottom:"12px",
width:"500px",
justifyContent:"center",
alignItems: "center",
}
export default Contact;

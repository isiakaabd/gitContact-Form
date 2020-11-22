import React, { Component } from 'react';
import {Consumer} from './Context';
import TextInputList from "../Form Folder/TextInputList "
import RadioTextField from "../Form Folder/RadioTextField"
import SelectInputValue from "../Form Folder/SelectInputValue"

 class AddContact extends Component {

    state={
        name:"",
        email:"",
        number: "",
        address:"",
        Country: "",
        religion :"",
        error:{}
    
    }

  

    onChange =(e)=>{
        this.setState({[e.target.name]:  e.target.value })
    }

    onChangeReligion=(e)=> {
      
        this.setState({ religion: e.target.value})
    }  
    onChangeCountry=(e)=>{
        this.setState({Country : e.target.value})
    }

    onsubmit(dispatch, e){
        e.preventDefault();
      
        const{name,email,number,address,Country,religion} =this.state;

        // if no input inn the text field

    if(name=== ""){
        this.setState({error: { name:'Name is Required '}})
        return
    }


    if(email=== ""){
        this.setState({error: {email :'Email is Required '}})
    return
    }


    if(number=== ""){
        this.setState({error: {number :'Number is Required '}})
        return
    }
    if(address=== ""){
        this.setState({error: {address :'Address is Required '}})
        return

    }

    if(Country=== ""){
        this.setState({error: {Country :'Country is Required '}})
        return
    }

        const NewContact={
             id:Date.now(),
            name,
            email,
            number,
            address,
            Country,
            religion,
            
             
        } 
        dispatch({type:"ADD_CONTACT",payload:NewContact})

this.setState({
    name:"",
    email:"",
    number: "",
    address:"",
    Country: "",
    religion :"",
    error:{}


})



    }


    render() {
        const{name,email,number,address,Country,religion,error} =this.state
        
   return(
    <Consumer>
        {
            (value)=>{
                const {dispatch} = value
                return(
                    <div style={{alignItems: "center", background:"white",}} className="card mb-3">
                    <div style={{width: "100%",  height: "100%", fontSize:"18px", marginBottom:"10px",  boxShadow:"5px 4px 5px #888888"}}className="card-header">Add Contact</div>
              <form>

                                              {/*Name Input  field  */}
                            <TextInputList 
                            label= "Name" 
                            placeholder ="Enter Your Name"
                            name = "name"
                            className ="form-control form-control-lg"
                            onChange = {this.onChange}
                            value ={name}
                            type ="text"
                            error ={error.name}
                            
                            />
                    
                                               {/*Email Input  field  */}
        
                           <TextInputList
                            label= "Email" 
                            placeholder ="Enter Your Email Address"
                            name = "email"
                            className ="form-control form-control-lg"
                            onChange = {this.onChange}
                            value ={email}
                            type ="email"
                            error ={error.email}
        
                            />



                   
                           <TextInputList
                            label= "Number" 
                            placeholder ="Enter Your Phone Number"
                            name = "number"
                            className ="form-control form-control-lg"
                            onChange = {this.onChange}
                            value ={number}
                            type ="text"
        
                            error ={error.number}
                             />


                                    
                            {/* input text-field for Address */}


                           <TextInputList
                            label= "Address" 
                            placeholder ="Enter Your Address"
                            name = "address"
                            className ="form-control form-control-lg"
                            onChange = {this.onChange}
                            value ={address}
                            type ="text"
                            error ={error.address}
        
                            />
        
        
                                   {/* Religion */}
        
                                    {/* Muslim */}
                        
                            <RadioTextField
                            onChange = {this.onChangeReligion}
                            value ="muslim"
                            type ="radio"
                            label= "Muslim"
                            name ="Muslim"
                            className= "radio-inline"
                            checked= {religion=== "muslim"} 
                            error ={error.religion}
                            />


                                    {/* Christian */}


                            <RadioTextField
                            onChange = {this.onChangeReligion}
                            value ="christian"
                            type ="radio"
                            label= "Christian"
                            name ="Christian"
                            className= "radio-inline"
                            checked= {religion=== "christian"} 
                            error ={error.religion}
                            />

                                    {/* Traditional */}

                            <RadioTextField
                            onChange = {this.onChangeReligion}
                            value ="traditional"
                            type ="radio"
                            label= "Traditional"
                            name ="Traditional"
                            className= "radio-inline"
                            checked= {religion=== "traditional"} 
                            error ={error.religion}
                            
                            />

                    
              
        
                                    {/*Countries   */}
        
                            <SelectInputValue
                            
                            onChange = {this.onChangeCountry} 
                            value ={Country}
                            type ="select"
                            label= "Country"
                            error ={error.Country}
                            name ="Select Your Country"
                            className="custom-select custom-select-lg"
                        
                            
                            />


                   
                   <button type="button" style={{marginBottom: "15px"}} onClick={this.onsubmit.bind(this,dispatch)} className="btn btn-dark btn-lg btn-block mt-12">Add Contact</button>
                    </form>
                  
                    </div>
                    
                )
            }
        }
    </Consumer>

   )
            
    }
 }
export default  AddContact
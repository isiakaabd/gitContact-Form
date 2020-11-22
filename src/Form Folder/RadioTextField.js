import React from 'react'
import classnames from "classnames";



export default function RadioTextField(props) {
    const {name,type, value, onChange,checked,error} = props
    return (
            
               <label  className="radio-inline mr-3"  >  
                        {name} 
                            <input
                            style={{marginRight: "10px"}}
                            className ={classnames("radio-inline ml-2" , {"is-unchecked" : error}  )}
                             type={type}
                             name = {name}
                             error ={error}
                            value ={value}
                             onChange ={onChange}
                             checked= {checked} 
                              /> 

                {error && < div  className=" invalid-feedback">{error}</div>}
       
                </label> 
    )  
}

import React from 'react'
import classnames from "classnames"

 function TextInputList (props) {
    const {name,placeholder,type, label,value, onChange, error} = props
    return (
        <div>
             <div className="form-group">
                      <label style={{float: "left"}} htmlFor={label}>{label}</label>
                      <input  type ={type}
                         placeholder ={placeholder}
                         className ={classnames("form-control form-control-lg" , {"is-invalid" : error}  )}
                         name={name}
                         value={value}
                         onChange ={onChange}
                      />
                        {error && < div  className=" invalid-feedback">{error}</div>}
                   </div> 
        </div>
    )
}
export default TextInputList
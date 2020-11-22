import React from 'react'
 function SelectInputValue(props) {

    const {name,value, onChange,className} = props
    return (
        <div>
           <div className="form-group">
                    
    <label  style={{float: "left"}}  htmlFor="form"> {name}</label>
                   <select  style={{width: "100%", marginBottom:"20px"}} onChange ={onChange}  value={value} className={className}>


                        <option >Country</option>
                        <option  value="Nigeria">Nigeria</option>
                        <option value="Togo">Togo</option>
                        <option value="Mali">Mali</option>
                        <option value="Gabon">Gabon</option>
                                        
                           </select>  
        </div>
        </div>
    )
}

export default  SelectInputValue
import React, { Component } from 'react'


const Context= React.createContext();

const reducer = (  state, action)=>{
    switch (action.type) {
        case "DELETE_CONTACT":
        return{
    ...state,
    contact: state.contact.filter(single=> single.id !== action.payload)
}            

case "ADD_CONTACT":
    return{
...state,
contact: [action.payload, ...state.contact]
} 

     default:
         return state;      

}
         

}

     
           
    




export  class Provider extends Component {
  
  state={
    contact: [

        // { 
        //     id:1,
        // name:"Isiaka Abdulahi",
        // email:"isiakaabd@gmail.com",
        // number: "+2347033637349",
        // address:"Up Zango Lokoja",
        // Country: "Nigeria",
        // religion :"christian"
        // },
        // {
        //     id:2,
        //     name:"Isiaka Nusaybah",
        //     email:"isiakaabd2018@gmail.com",
        //     number: "12345",
        //     address:"Up Zango Lokoja",
        //     Country:"Ghana",
        //     religion :"christian"
        //     },
        //     {
        //         id:3,
        //         name:"Isiaka Nusaybah",
        //         email:"isiakaabd2020@gmail.com",
        //         number: "98912345",
        //         address:"down Zango Lokoja",
        //         Country:"Togo",
        //         religion :"Traditional"
        //         },
    ],
    dispatch: action => this.setState(state=> reducer(state,action))
    
  }
  
  
  
    render() {
        return (
           <Context.Provider value ={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

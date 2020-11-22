


const Header= (props)=> {
    const{name} = props
            return(<div  style={{alignItems: "center"}} >  
    <nav  className="navbar navbar-expand-lg  navbar-dark bg-dark mb-20" >
            <a className="navbar-brand justify-content-center " href="#">{name} Contact-List</a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>

{/* using consumer  */}


{/* <Consumer>
 {(value)=>{
const {contact} = value
return contact.map( (single) => {
return <li key={single.id}>{single.name} </li>
})
 }} 
</Consumer> */}
</div>
    )}

    // Default Prop
Header.defaultProps={
name :"My App List"
}
export default Header


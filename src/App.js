import "./App.css";
import ContactState from "./Component/ContactState";
import 'bootstrap/dist/css/bootstrap.min.css'
 import Header from "./Component/Header";
 import AddContact from "./Component/AddContact";

import {Provider} from "./Component/Context"
function App() {


  return (  
<Provider> 
    <div className="App">
    
    
    <Header  name= "ISIAKA ABDULAHI"/>
    <AddContact/>
      <ContactState/>
  
  
      
     </div>
     </Provider>
)}

export default App;

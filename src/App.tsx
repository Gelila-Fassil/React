// import { Example } from "./components/Example"
// import ButtonClickCounter from "./components/Example"
import ToggleBackground from "./components/Example"
import ListGroup from "./components/ListGroup"
import Product from "./components/PropsExample/Product.tsx";
import Userinfo from "./components/PropsExample/Userinfo.tsx";
import Welcome from "./components/PropsExample/Welcome.tsx"


function App (){
  return (
    <div>
      <ListGroup />
      {/* <Example/> */}
      {/* <ButtonClickCounter/> */}
      <ToggleBackground />
      <Welcome name="Gelila" />
      <Welcome name="abel" />
      <Welcome name="rodi" />
      <Userinfo name="gelila" age={22} />
      <Userinfo name="abel" age={25} />
      <Product productName="dress" price={50}/>
    </div>
  );
 
}
export default App
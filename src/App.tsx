// import { Example } from "./components/Example"
// import ButtonClickCounter from "./components/Example"
import ToggleBackground from "./components/Example"
import ListGroup from "./components/ListGroup"
import Button from "./components/PropsExample/Button.tsx";
import ColorsList from "./components/PropsExample/ColorsList.tsx";
import Product from "./components/PropsExample/Product.tsx";
import Profile from "./components/PropsExample/Profile.tsx";
import UserCard from "./components/PropsExample/UserCard.tsx";
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
      <Button lable ="lable one"/>
      <Button lable ="lable two"/>
      <Profile name='gelila' age={23} isOnline={true} />
      <Profile name='abel' age={26} isOnline={false} />
      <ColorsList colors={['red', 'blue']}/>
      <UserCard user={{name:'gelila', email:'gelila@gmail.com', role: 'admin'}} />
    </div>
  );
 
}
export default App
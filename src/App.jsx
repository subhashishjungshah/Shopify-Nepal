import "./App.css";
import Footercomponent from "./components/Footer-component/Footercomponent";
import Navbar from "./components/Navbar-component/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar/SecondaryNavbar";
import Routing from "./Routing/Routing";
function App() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Routing />
      <Footercomponent />
    </>
  );
}
 
export default App;

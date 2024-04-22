 import './App.css'
 import { Outlet, Link } from "react-router-dom";

  import Nav from './components/Nav';
  import Grid1main from './components/Grid1main';
import Grid2main from './components/Grid2main';
    function App() {
 
  return (
    <div>
  {/* nav */}
      <Nav /> 
<div className="grid grid-cols-12 gap-1 mt-0  justify-center  bg-[#F2F3F5]"> 
  {/* col1 */}
  <Grid1main/>
  <div className=" col-span-12 md:col-span-8 lg:col-span-6 lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  overflow-y-scroll  flex flex-col  justify-center md:px-4 px-[2px]"  style={{Height:'90vh'}}>
 
 <Outlet/>

    </div>
    <Grid2main/>

    
</div>
    </div> 
   )
}

export default App

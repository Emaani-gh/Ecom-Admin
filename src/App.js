import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { SideMenu } from "./Components/SideMenu";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from "./Components/Users";
import Products from "./Components/Products";
import CategoryLayout from "./Components/CategoryLayout";
import { AddCateg } from "./Components/AddCateg";
import NewProduct from "./Components/NewProduct";
import { ViewDetails } from "./Components/ViewDetails";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='grid-layout'>
          <Header />
          <SideMenu />
          
          <Routes>
            <Route path="/" element = {< Home />} />
            <Route path="/users" element = {< Users />} />
            <Route path="/products">
              <Route index element={<Products/>} />
              <Route path="add" element={<NewProduct/>}/>
              <Route path="/products/:id" element={<ViewDetails/>}/>
            </Route>  
            <Route path="/category" >
              <Route index element={<CategoryLayout/>}/>
              <Route path="add" element={<AddCateg/>}/>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

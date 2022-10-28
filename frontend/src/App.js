import './App.css';
import Frontpage from './Component/frontpage';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import SignUp from './Component/signup';
import Details from './Component/details';
import Dashboard from './Component/dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Frontpage/>}></Route>
    <Route path="/Signup" element={<SignUp/>}></Route>
    <Route path="/Details" element={<Details/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

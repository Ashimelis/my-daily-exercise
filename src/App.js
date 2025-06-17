
import Login from "./pages/Auth/Login";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="h-[100vh] flex justify-center item-center">
      <Routes>
        <Route path='login' element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

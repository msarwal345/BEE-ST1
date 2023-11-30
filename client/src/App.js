
import Employee from './component/Employee';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import CreateEmployee from './component/CreateEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import DeleteEmployee from './component/DeleteEmployee';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Employee/>}></Route>
        <Route path='/create' element={<CreateEmployee/>}></Route>
        <Route path='/update' element={<UpdateEmployee/>}></Route>
        <Route path='/delete' element={<DeleteEmployee/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { EditOnlyForm } from './components/EditOnlyForm';
import { ReadOnly } from './components/ReadOnly';
import { Navbar } from './components/Navbar';
import { Mydashboard } from './components/Mydashboard';



function App() {

  console.log()
  return (

    
    <div className="App">
     <>
 
<Routes>
<Route path='/' element={<EditOnlyForm/>}/>
<Route path='readonly' element={<ReadOnly/>}/>
<Route path='mydashboard' element={<Mydashboard/>}/>
</Routes>
</>
    </div>
  );
}

export default App;

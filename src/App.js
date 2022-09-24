
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MisionsList from './pages/MisionsList';
import Mission from './pages/Mission';



function App() {
  return (
    <div className="App">
      <Routes>
       <Route strict exact path="/" element={<MisionsList/>} />  
       <Route strict exact path="/:id" element={<Mission/>} /> 
       </Routes>
    </div>
  );
}

export default App;

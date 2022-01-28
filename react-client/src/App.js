import './App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import UpdatePage from './components/UpdatePage';
import AddingForm from './components/AddingForm';

function App() {




  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element = {<Homepage />} />    
        <Route path="/:id" element = {<UpdatePage />}  />  
        <Route path="/add" element = {<AddingForm />} />
      </Routes> 

      
    </div>
  );
}

export default App;

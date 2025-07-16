import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internalmarks from './components/Internalmarks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Internalmarks/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
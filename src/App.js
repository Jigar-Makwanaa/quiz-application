import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Quiz from './component/Quiz';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

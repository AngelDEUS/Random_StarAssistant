import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './Components/layout/MainLayout';

function App() {
  return (
    <div >
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;

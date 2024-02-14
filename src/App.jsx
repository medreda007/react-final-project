
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/contextProvider';
import { HomePage } from './pages/Home/home';


function App() {
  return (
    <MyProvider>
      <Routes >
        <Route path='/' element={<HomePage />} />
        
      </Routes >
    </MyProvider>
  );
}

export default App;





import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/contextProvider';
import { HomePage } from './pages/Home/home';
import Header from './layouts/Header';
import { TheFooter } from './layouts/Footer';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Shop } from './pages/Shop/Shop';


function App() {
  return (
    <MyProvider>
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Shop' element={<Shop />} />
      </Routes >
      <TheFooter />
    </MyProvider>
  );
}

export default App;




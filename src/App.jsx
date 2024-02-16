
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './utils/contextProvider';
import { HomePage } from './pages/Home/home';
import Header from './layouts/Header';
import { TheFooter } from './layouts/Footer';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Products } from './pages/products/Products';
import { Account } from './pages/account/Account';
import { SignUp } from './pages/SignUp/SignUp';


function App() {
  return (
    <MyProvider>
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Products/:product' element={<Products/>} />
        <Route path='/Account' element={<Account/>} />
        <Route path='/SignUp' element={<SignUp/>} />
      </Routes >
      <TheFooter />
    </MyProvider>
  );
}

export default App;




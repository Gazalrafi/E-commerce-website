import React from 'react';
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './componentsNew/Layout/Layout';
import UserProfile from './componentsNew/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import StartingPageContent from './componentsNew/StartingPage/StartingPageContent';
import About from './components/Nav/About.js';
import Home from './components/Nav/Home.js';
import Contact from './components/Nav/Contact.js';
import ProductCard from './components/product/ProductCard.js';
import ProductImageA from './components/product/ProductImageA.js';
import ProductImageB from './components/product/ProductImageB.js';
import ProductImageC from './components/product/ProductImageC.js';
import ProductImageD from './components/product/ProductImageD.js';

function App(props) {
  const authCtx = useContext(AuthContext);

  return (
   
    <Layout>
     
      <Switch>
        {authCtx.isLoggedIn && <Route path='/' exact>
          <HomePage />
        </Route>}
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        

       <Route path='/about'><About/></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/contact'><Contact/></Route>
      <Route path='/product'><ProductCard/></Route>

      <Route path='/imageA'><ProductImageA/></Route>
      <Route path='/imageB'><ProductImageB/></Route>
      <Route path='/imageC'><ProductImageC/></Route>
      <Route path='/imageD'><ProductImageD/></Route>
      </Switch>
      

     
      <StartingPageContent />;
     
    </Layout>
    
  );
}

export default App;
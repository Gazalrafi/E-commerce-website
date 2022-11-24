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


function App() {
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
      </Switch>


     
      <StartingPageContent />;
    </Layout>
    
  );
}

export default App;
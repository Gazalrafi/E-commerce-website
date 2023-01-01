import React ,{Suspense}from 'react';
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingSpinner from './pages/LoadingSpinner';
import Layout from './componentsNew/Layout/Layout';
import AuthContext from './store/auth-context';
import StartingPageContent from './componentsNew/StartingPage/StartingPageContent';


const UserProfile=React.lazy(()=>import('./componentsNew/Profile/UserProfile.js'));
const AuthPage=React.lazy(()=>import('./pages/AuthPage'));
const HomePage=React.lazy(()=>import('./pages/HomePage'));
const About=React.lazy(()=>import('./components/Nav/About.js'));
const Home=React.lazy(()=>import('./components/Nav/Home.js'));
const Contact=React.lazy(()=>import('./components/Nav/Contact.js'));
const ProductCard=React.lazy(()=>import('./components/product/ProductCard.js'));
const ProductImageA=React.lazy(()=>import('./components/product/ProductImageA.js'));
const ProductImageB=React.lazy(()=>import('./components/product/ProductImageB.js'));
const ProductImageC=React.lazy(()=>import('./components/product/ProductImageC.js'));
const ProductImageD=React.lazy(()=>import('./components/product/ProductImageD.js'));



function App(props) {
  const authCtx = useContext(AuthContext);

  return (
   
    <Layout>
     
     <Suspense 
     fallback={
      <div className='centered'>
        <LoadingSpinner />
      </div>
    }>
      <Switch>
        {authCtx.isLoggedIn && <Route path='/' exact>
          <HomePage />
        </Route>}
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage/>
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        

       {authCtx.isLoggedIn && (<div><Route path='/about'><About/></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/contact'><Contact/></Route>
      <Route path='/product'><ProductCard/></Route>

      <Route path='/imageA'><ProductImageA/></Route>
      <Route path='/imageB'><ProductImageB/></Route>
      <Route path='/imageC'><ProductImageC/></Route>
      <Route path='/imageD'><ProductImageD/></Route></div>)}
      </Switch>
      </Suspense>

      <StartingPageContent />;
   
    </Layout>
    
  );
}

export default App;
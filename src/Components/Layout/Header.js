import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderButton from './HeaderButton';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import {BrowserRouter as Router , Switch , Route , Link , Redirect, useHistory   } from 'react-router-dom';
import Product from '../Products/Product';
import Home from '../../Pages/Home';
import ProductPage from '../Products/ProductPage';
import Login from '../../Pages/Login';
import CartContext from '../../store/cart-context';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const isLoggedIn = cartCtx.isLoggedIn;
  const history = useHistory();

  const logoutHandler=()=>{
    cartCtx.logout();
    console.log("logout done");
    localStorage.removeItem("email");
    history.replace('/');
  }

  return (
    <>
    <Router>
      <Navbar fixed="top" bg="dark" variant="dark" className='justify-content-center'>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/home'>Home</Nav.Link>
          { isLoggedIn && <Nav.Link as={Link} to='/store'>Store</Nav.Link>}
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          {!isLoggedIn && <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Link} onClick={logoutHandler}>LogOut</Nav.Link>}
        </Nav>
        {isLoggedIn && <HeaderButton onClick={props.onShow}/>}
      </Navbar>
      <div
        style={{
          backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh'
        }}
      >
        <h1 style={{ fontSize: '100px', className:'mt-5' }}>The Generics</h1>
      </div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        {isLoggedIn &&  <Route path="/store" exact>
              <Product />
            </Route> }
        <Route path="/about">
              <About />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/store/:storeid">
              <ProductPage key={props.product.id} product={props.product} />
            </Route> 
            <Route path="/login" exact>
              <Login />
            </Route>
      </Switch>
      </Router>
    </>
  );
};

export default Header;

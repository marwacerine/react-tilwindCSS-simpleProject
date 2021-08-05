import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from  './components/footer';
import { Switch,Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/dropdown';

function App() {
  
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    const hideMenu = () =>{
      if (window.innerWidth > 768 && isOpen){
        setIsOpen(false);

      }
    };
    window.addEventListener('resize',hideMenu);

    return () => {
      window.removeEventListener('resize',hideMenu);
    };
  });

  return (
    <div className="App">
     
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

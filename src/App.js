import logo from './logo.svg';
import './App.css'
// import Greet from './Components/Greet';
// import One from './One'
// import Counter from './Components/Counter';
// import Welcome from './Components/Welcome';
// import Destructure_classcomp from './Components/Destructure_classcomp';
// import Evendbind from './Components/Evendbind';
// import Parentcomp from './Components/Parentcomp';
// import Conditional from './Components/Conditional';
import Stylesheet from './Components/Stylesheet';
 import Inline from './Components/Inline';
// import './Components/appStyles.css'
 import styles from './Components/appStyles.module.css'
// import List_render from './Components/List_render';
// import Hooks_counter from './Components/Hooks_counter';
// // import Class_comp from './components/Class_comp';
// import Images from './Components/Image_proj/Images';
 import Navbar from './Components/navbar/Navbar';
// import { Router } from 'react-router-dom/dist/umd/react-router-dom.development';
 import { BrowserRouter,Routes,Route} from 'react-router-dom/dist/umd/react-router-dom.development';
 import Shop from './Pages/Shop';

 import ShopCategory from'./Pages/ShopCategory';
 import Product from './Pages/Product';
 import Cart from './Pages/Cart';
 import LoginSignup from './Pages/LoginSignup';
 import Footer from './Components/Footer/Footer';
 import men_banner from './Components/assets/banner_mens.png';
 import women_banner from './Components/assets/banner_women.png';
 import kid_banner from './Components/assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:Id' element={<Product/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
      {/* <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1> 
      <Inline /> 
     <Stylesheet primary={true}/> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 

      </header> */}
      {/* <Greet/> */}
      {/* <Greet name="Bruce" heroName="Batsman"><p>this is children</p></Greet>
      <Greet name="clark" heroName="Actor"/> */}
       {/* <Destructure_classcomp name="Bru" heroName="batsman"/>
      <Destructure_classcomp name="clark" heroName ="actor" />
      <Evendbind /> */}
      {/* <Parentcomp /> */}
      {/* <Welcome /> */}
      {/* <Counter /> */}
      {/* <One/>
      {/* <Class_comp /> */}
      {/* <Two/> */}
      {/* <Conditional /> */}
      {/* <List_render /> */}
      {/* <Hooks_counter/> */}
      {/* <Images /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import Home from './lesson4/component/Home';
import About from './lesson4/component/about';
import Contact from './lesson4/component/contact';
import Service from './lesson4/component/service';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyComponent from './Lesson2/lesson2_img';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <MyComponent></MyComponent>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  return(
    <>
    <BrowserRouter>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">Home</Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/about">About</Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/contact">Contact</Link>|
      <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/service">Service</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    </BrowserRouter>
    
    <button>english</button>
    <button>עברית</button>
    </>
  );
}
export default App;
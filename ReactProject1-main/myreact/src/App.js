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
import i18n from 'i18next';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import Todo from './redux/Todo';
import { store } from './redux/store';

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
  const he=()=>{
    i18n.changeLanguage('he');
  }
  const en=()=>{
    i18n.changeLanguage('en');
  }
  const {t}=useTranslation();
  return(
    // <div className='b'> 
    // <I18nextProvider> 
    // <BrowserRouter>
    // <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    //   <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link1" to="/">{t('home.link')}</Link>|
    //   <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link1" to="/about">{t('about.link')}</Link>|
    //   <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link1" to="/contact">{t('contact.link')}</Link>|
    //   <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link1" to="/service">{t('service.link')}</Link>
    // </nav>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   <Route path="/contact" element={<Contact/>}/>
    //   <Route path="/service" element={<Service/>}/>
    // </Routes>
    // </BrowserRouter>
    // </I18nextProvider>
    // <div class="btn-group">
    // <button class="btn btn-primary m" onClick={en}>english</button>
    // <button class="btn btn-primary m" onClick={he}>עברית</button>
    // </div>
    // </div>

    <>
    <Provider store={store}>
      <Todo/>
    </Provider>
    </>
  );
}
export default App;